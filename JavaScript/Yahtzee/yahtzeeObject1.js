yahtzee = {
  'turnsRemaining' : 2,
   'throwsRemainingInTurn' : 3,
   'player' : {
     'name' : 'Zach',
     'avatar': 'https://lorempixel.com/200/200/people/2/'
   },
  'dice' : [
    {
      'sideUp' : 0,
      'saved' : false,
    },
    {
      'sideUp' : 0,
      'saved' : false,
    },
    {
      'sideUp' : 0,
      'saved' : false,
    },
    {
      'sideUp' : 0,
      'saved' : false,
    },
    {
      'sideUp' : 0,
      'saved' :false,
    }
  ],
  'scoreCard' : [
    {
      'title' : 'Ones',
      'top' : true,
      'displaySequence' : 1,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfOnes',
    },
    {
      'title' : 'Twos',
      'top' : true,
      'displaySequence' : 2,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfTwos',
    },
    {
      'title' : 'Threes',
      'top' : true,
      'displaySequence' : 3,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfThrees',
    },
    {
      'title' : 'Fours',
      'top' : true,
      'displaySequence' : 4,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfFours',
    },
    {
      'title' : 'Fives',
      'top' : true,
      'displaySequence' : 5,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfFives',
    },
    {
      'title' : 'Sixes',
      'top' : true,
      'displaySequence' : 6,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfOnes',
    },
    {
      'title' : 'Three of a Kind',
      'top' : false,
      'displaySequence' : 9,
      'scoreRecorded' : true,
      'score' : 17,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },
    {
      'title' : 'Four of a Kind',
      'top' : false,
      'displaySequence' : 10,
      'scoreRecorded' : true,
      'score' : 24,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },
    {
      'title' : 'Full House',
      'top' : false,
      'displaySequence' : 11,
      'scoreRecorded' : true,
      'score' : 25,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },
    {
      'title' : 'Small Straight',
      'top' : false,
      'displaySequence' : 12,
      'scoreRecorded' : true,
      'score' : 30,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },
    {
      'title' : 'Large Straight',
      'top' : false,
      'displaySequence' : 13,
      'scoreRecorded' : true,
      'score' : 40,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },
    {
      'title' : 'Yahtzee',
      'top' : false,
      'displaySequence' : 14,
      'scoreRecorded' : true,
      'score' : 50,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },
    {
      'title' : 'Chance',
      'top' : false,
      'displaySequence' : 15,
      'scoreRecorded' : true,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    },

  ]
}
