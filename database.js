const sqlite3 = require("sqlite3").verbose()

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database("./users.db", (err) => {
    if (err) {
        console.error("Erreur lors de l'ouverture de la base de données :", err.message)
    } else {
        console.log("Connecté à la base de données SQLite.")

        // Créer la table des utilisateurs si elle n'existe pas
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error("Erreur lors de la création de la table :", err.message)
                }
            }
        )
    }
})

module.exports = db
