const voters = [ {name:'Bob' , age: 30, voted: true},
 {name:'Jake' , age: 32, voted: true}, 
{name:'Kate' , age: 25, voted: false}, 
{name:'Sam' , age: 20, voted: false}, 
{name:'Phil' , age: 21, voted: true},
 {name:'Ed' , age:55, voted:true}, 
{name:'Tami' , age: 54, voted:true},
 {name: 'Mary', age: 31, voted: false}, 
{name: 'Becky', age: 43, voted: false},
 {name: 'Joey', age: 41, voted: true}, 
{name: 'Jeff', age: 30, voted: true}, 
{name: 'Zack', age: 19, voted: false} ]

  voters.reduce((acc, voter) => {
	if (voter.age >= 18 && voter.age <=25) {
		return {
			...acc, 
			young: {votesCount: voter.voted ? acc.young.votesCount + 1 : acc.young.votesCount, 
			peopleCount: acc.young.peopleCount + 1
			}
		}
	}
	if (voter.age >= 26 && voter.age <=35) {
			return {
			...acc, 
			mid: {votesCount: voter.voted ? acc.mid.votesCount + 1 : acc.mid.votesCount, 
			peopleCount: acc.mid.peopleCount + 1
			}
		}
	}
	
	if (voter.age >= 36 && voter.age <=55) {
		return {
			...acc,
			old: {votesCount: voter.voted ? acc.old.votesCount + 1 : acc.old.votesCount, 
			peopleCount: acc.old.peopleCount + 1
			}
		}
	}
	
}, {
	young: {votesCount: 0, peopleCount: 0},
	mid: {votesCount: 0, peopleCount: 0},
	old: {votesCount: 0, peopleCount: 0},
}) 