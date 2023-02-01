import { db } from "./SQLite";

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Notas " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria Text, texto TEXT);")
    })
}

export async function addNota() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?,?,?);",
                [notas.titulo, nota.categoria, nota.texto], () => {
                    resolve("Nota adicionada com sucesso!")
                })
        })
    })

}

export async function buscaNotas() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Notas;",[], (transaction, resultado) => {
                    resolve(resultado.rows._array)
                })
        })
    })

}