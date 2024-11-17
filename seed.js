const db = require("./database")

// Données à insérer
const users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Emily", lastName: "Johnson" },
    { firstName: "Michael", lastName: "Brown" },
    { firstName: "Sarah", lastName: "Davis" },
    { firstName: "David", lastName: "Wilson" },
    { firstName: "Laura", lastName: "Miller" },
    { firstName: "James", lastName: "Moore" },
    { firstName: "Olivia", lastName: "Taylor" },
    { firstName: "Daniel", lastName: "Anderson" },
    { firstName: "Sophia", lastName: "Thomas" },
    { firstName: "Christopher", lastName: "Jackson" },
]

// Fonction pour insérer les utilisateurs
function insertUsers() {
    users.forEach((user) => {
        db.run(
            `INSERT INTO users (firstName, lastName) VALUES (?, ?)`,
            [user.firstName, user.lastName],
            (err) => {
                if (err) {
                    console.error("Erreur lors de l'insertion de l'utilisateur :", err.message)
                } else {
                    console.log(`Utilisateur inséré : ${user.firstName} ${user.lastName}`)
                }
            }
        )
    })
}

// Exécuter la fonction d'insertion
insertUsers()
