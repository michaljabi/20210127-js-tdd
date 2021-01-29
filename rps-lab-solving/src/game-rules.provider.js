export default {
    rockPaperScissorsLizardSpockGameRules() {
        return {
            'scissors': ['paper', 'lizard'],
            'paper': ['rock', 'spock'],
            'rock': ['scissors', 'lizard'],
            'lizard': ['paper', 'spock'],
            'spock': ['rock', 'scissors'],
        }
    },
    rockPaperScissorsGameRules() {
        return {
            'scissors': ['paper'],
            'paper': ['rock'],
            'rock': ['scissors'], 
        }
    }
}