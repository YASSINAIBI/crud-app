export const checkUser = (userID, firstName, lastName, state, userName, createdAt, matricule) => {
    let errors = []
    let validMatriculeInput = new RegExp(/^[0-9]+$/);

    if(firstName.length < 2 || lastName.length < 2 || userName.length < 2)
        errors.push("le nom doit contain 2 character minimaux")

    if(!String(matricule).match(validMatriculeInput))
        errors.push("matriculation doit contain just les nombres")

    if(state != "En validation" && state != "Validé" && state != "Rejeté")
        errors.push("selectionner une valid status")

    return errors
}
