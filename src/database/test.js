const Database = require('./db')

Database.then(async db => {
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6555874",
            "Lar dos Meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "126446456346",
            "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 8h até 18h.",
            "1"
        );
    `)

    const selectedOrphanges = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanges)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"')
    console.log(orphanage)
})