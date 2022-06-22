function play(player, pc) {
    return player == pc ? 'Empate'
         : player == 'piedra' && pc == 'tijera' ? 'Ganaste'
         : player == 'papel' && pc == 'piedra' ? 'Ganaste'
         : player == 'tijera' && pc == 'papel' ? 'Ganaste'
         : 'perdiste';
}