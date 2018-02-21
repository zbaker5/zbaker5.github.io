yahtzee = {
  'turnsRemaining' : 13,
   'throwsRemainingInTurn' : 3,
   'player' : {
     'name' : 'Zach',
     'avatar': 'https://lorempixel.com/200/200/people/1/'
   },
  'dice' : [
    {
      'sideUp' : 6,
      'saved' : true,
    },
    {
      'sideUp' : 1,
      'saved' : false,
    },
    {
      'sideUp' : 6,
      'saved' : true,
    },
    {
      'sideUp' : 2,
      'saved' : false,
    },
    {
      'sideUp' : 1,
      'saved' : false
    }
  ],
  'scoreCard' : [
    {
      'title' : 'Ones',
      'top' : true,
      'displaySequence' : 1,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfOnes',
    },
    {
      'title' : 'Twos',
      'top' : true,
      'displaySequence' : 2,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfTwos',
    },
    {
      'title' : 'Threes',
      'top' : true,
      'displaySequence' : 3,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfThrees',
    },
    {
      'title' : 'Fours',
      'top' : true,
      'displaySequence' : 4,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfFours',
    },
    {
      'title' : 'Fives',
      'top' : true,
      'displaySequence' : 5,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfFives',
    },
    {
      'title' : 'Sixes',
      'top' : true,
      'displaySequence' : 6,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfOnes',
    },
    {
      'title' : 'Full House',
      'top' : false,
      'displaySequence' : 9,
      'scoreRecorded' : true,
      'score' : 25,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'fixedScoreOf25',
    }

  ]
}
