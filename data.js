module.exports = {

    user_scores: [
        {
            name: 'Roman',
            scoreTime: [34, 52, 27, 48],
            scoreEat: [5, 8, 3, 4]
        },
        {
            name: 'Taras',
            scoreTime: [27, 44, 41, 39],
            scoreEat: [2, 5, 4, 5]
        },
        {
            name: 'Johny',
            scoreTime: [45, 36, 28, 53],
            scoreEat: [7, 4, 4, 7]
        },
        {
            name: 'Michael',
            scoreTime: [38, 29, 40, 36],
            scoreEat: [6, 5, 6, 5]
        }
    ],

    getAllInformation: function(arr){
        return arr;
    },


    getUserHighestScore: function (arr, user){
        let i;

        for(i = 0; i < arr.length; i++){
            if(arr[i]['name'] === user){
                return {
                    name: user,
                    highest_score: this.findMax(arr[i].scoreTime)
                }
            }
        }
    },


    getAllHighestScores: function (arr){
        let arrOfHighestScores = [],
            i;

        for(i = 0; i < arr.length; i++){
            arrOfHighestScores.push(this.findMax(arr[i].scoreTime));
        }
        return arrOfHighestScores
    },


    createNewUser: function(arr, user){
        let i;

        for(i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                return "this user already exists";
            }
        }
        arr.push({name: user, scoreTime: [], scoreEat: []});
        return "new user " + user + " has beed added";
    },


    updateUser: function(arr, user, time, eat){
        let i;

        for(i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                arr[i].scoreTime.push(+time);
                arr[i].scoreEat.push(+eat);
                return "user:" + user + " has beed updated";
            }
        }
        return "user:" + user + " can not be found";
    },


    removeUser: function(arr, user){
        let i;

        for(i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                arr.splice(i, 1);
                return 'user: ' + user + ' has been deleted';
            } 
        }
        return "user:" + user + " can not be found";

    },


    findMax: function (arr) {
        let max = -Infinity,
            i;
        
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }


}