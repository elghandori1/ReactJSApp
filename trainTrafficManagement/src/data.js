const trains = [
    { id: 't1', name: 'Buraq', villes: [
        { nameV: 'fes', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'meknes', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'Kmisset', ordreP: Math.floor(Math.random() * 100) }
    ] },
    { id: 't2', name: 'Gazel', villes: [
        { nameV: 'casa', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'taza', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'oujda', ordreP: Math.floor(Math.random() * 100) }
    ] },
    { id: 't3', name: 'Eagle-Wins', villes: [
        { nameV: 'fes', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'rabat', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'sella', ordreP: Math.floor(Math.random() * 100) }
    ] },
    { id: 't4', name: 'Fennec', villes: [
        { nameV: 'fes', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'knitra', ordreP: Math.floor(Math.random() * 100) },
        { nameV: 'marackech', ordreP: Math.floor(Math.random() * 100) }
    ] },
]

export default trains;