function play(player, pc) {
    switch (true) {
        case player == pc :
            return 'Empate'
            break;
        case player == 'piedra' && pc == 'tijera':
        case player == 'papel' && pc == 'piedra' :
        case player == 'tijera' && pc == 'papel' :
            return 'Ganaste'
            break;
        default:
            return 'Perdiste'
    }
}