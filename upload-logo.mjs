import { readFileSync } from 'fs'

// Use existing access token from firebase CLI
const config = JSON.parse(readFileSync(`${process.env.HOME}/.config/configstore/firebase-tools.json`, 'utf8'))
const access_token = config.tokens.access_token
console.log('✓ Using existing access token')

const bucket = 'lifted-sound.firebasestorage.app'
const objectName = 'assets/logo.png'
const fileContent = readFileSync('./logo.png')

// Upload
const uploadUrl = `https://storage.googleapis.com/upload/storage/v1/b/${encodeURIComponent(bucket)}/o?uploadType=media&name=${encodeURIComponent(objectName)}`
const uploadRes = await fetch(uploadUrl, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'image/png',
  },
  body: fileContent,
})

const result = await uploadRes.json()
if (!uploadRes.ok) {
  console.error('Upload failed:', JSON.stringify(result, null, 2))
  process.exit(1)
}
console.log('✓ Logo uploaded!')

// Make public
const aclUrl = `https://storage.googleapis.com/storage/v1/b/${encodeURIComponent(bucket)}/o/${encodeURIComponent(objectName)}/acl`
await fetch(aclUrl, {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${access_token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ entity: 'allUsers', role: 'READER' }),
})
console.log('✓ Made public')

const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(objectName)}?alt=media`
console.log('Public URL:', publicUrl)
