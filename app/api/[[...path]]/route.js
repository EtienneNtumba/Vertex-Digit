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
