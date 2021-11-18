let value = prompt("Quel est votre âge ? ")
if (value > 0 && value < 130) {
    if (value >= 18) {
        alert("Vous êtes majeur.")
    } else {
        alert("Vous êtes mineur")
    }
} else {
    alert("Veuillez indiquer une valeur comprise entre 0 et 130")
}