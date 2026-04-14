export interface Release {
  id: number
  title: string
  type: 'Album' | 'EP' | 'Single'
  year: string
  tracks: number
  gradient: string
  accent: string
  description: string
}

export const releases: Release[] = [
  {
    id: 1,
    title: 'Rise',
    type: 'Album',
    year: '2024',
    tracks: 12,
    gradient: 'linear-gradient(135deg, #7c3aff 0%, #ff2d78 100%)',
    accent: '#ff2d78',
    description: 'A full-length debut capturing the spirit of a generation ready to be heard.',
  },
  {
    id: 2,
    title: 'Belong',
    type: 'EP',
    year: '2023',
    tracks: 6,
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #7c3aff 100%)',
    accent: '#00c6ff',
    description: 'Six songs about finding your place and the people who make you feel at home.',
  },
  {
    id: 3,
    title: 'Unbreakable',
    type: 'Single',
    year: '2023',
    tracks: 1,
    gradient: 'linear-gradient(135deg, #00f0c8 0%, #3a8fff 100%)',
    accent: '#00f0c8',
    description: 'The anthem that started it all — strength, hope, and the sound of youth.',
  },
  {
    id: 4,
    title: 'Together We Sing',
    type: 'Single',
    year: '2022',
    tracks: 1,
    gradient: 'linear-gradient(135deg, #ffb347 0%, #ff2d78 100%)',
    accent: '#ffb347',
    description: 'A celebration of voices joining as one across every generation.',
  },
]
