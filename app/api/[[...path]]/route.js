import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const uri = process.env.MONGO_URL
const dbName = process.env.DB_NAME || 'vertex_congo'

let client
let clientPromise

function getClient() {
  if (!clientPromise) {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  }
  return clientPromise
}

async function db() {
  const c = await getClient()
  return c.db(dbName)
}

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

function json(data, init = {}) {
  return NextResponse.json(data, { ...init, headers: { ...cors, ...(init.headers || {}) } })
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors })
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    if (path === '' || path === 'health') {
      return json({ ok: true, service: 'vertex-congo', time: new Date().toISOString() })
    }
    if (path === 'contacts') {
      const d = await db()
      const items = await d.collection('contacts').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(100).toArray()
      return json({ items })
    }
    return json({ error: 'Not found', path }, { status: 404 })
  } catch (e) {
    return json({ error: e.message }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    if (path === 'applications') {
      const fd = await request.formData()
      const name = String(fd.get('name') || '').slice(0, 200)
      const email = String(fd.get('email') || '').slice(0, 200)
      const phone = String(fd.get('phone') || '').slice(0, 60)
      const message = String(fd.get('message') || '').slice(0, 5000)
      const position = String(fd.get('position') || '').slice(0, 200)
      const lang = fd.get('lang') === 'en' ? 'en' : 'fr'
      const cv = fd.get('cv')
      if (!name || !email || !cv || typeof cv === 'string') {
        return json({ error: 'name, email, cv required' }, { status: 400 })
      }
      if (cv.size > 5 * 1024 * 1024) {
        return json({ error: 'CV too large (max 5MB)' }, { status: 413 })
      }
      const buf = Buffer.from(await cv.arrayBuffer())
      const doc = {
        id: uuidv4(),
        name, email, phone, message, position, lang,
        cv: {
          filename: cv.name || 'cv',
          type: cv.type || 'application/octet-stream',
          size: cv.size,
          data: buf.toString('base64'),
        },
        createdAt: new Date().toISOString(),
      }
      const d = await db()
      await d.collection('applications').insertOne(doc)
      return json({ ok: true, id: doc.id })
    }

    const body = await request.json().catch(() => ({}))
    if (path === 'contact') {
      const { name, email, org, subject, message, lang } = body || {}
      if (!name || !email || !message) {
        return json({ error: 'name, email, message required' }, { status: 400 })
      }
      const doc = {
        id: uuidv4(),
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        org: org ? String(org).slice(0, 200) : '',
        subject: subject ? String(subject).slice(0, 200) : '',
        message: String(message).slice(0, 5000),
        lang: lang === 'en' ? 'en' : 'fr',
        createdAt: new Date().toISOString(),
      }
      const d = await db()
      await d.collection('contacts').insertOne(doc)
      return json({ ok: true, id: doc.id })
    }
    return json({ error: 'Not found', path }, { status: 404 })
  } catch (e) {
    return json({ error: e.message }, { status: 500 })
  }
}
