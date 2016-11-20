


/* Step 1: Once the user joins the game, there will be a pop-up alert telling he or she to pick either charmander, squirtle or bulbasaur.
   Step 2: Now that he or she has chosen their pokemon they will be a pop-up alert telling user he or she has successfully chosen a mon/and now they will be placed in floor 1.
   Step 3: Now that user is in floor 1 he or she will battle a pokemon; floor 1-5 will probably has pokemon from the lvl 1 to 7 range; If they win the battle he or she will move on to floor 2.
   Step 4: this process will continue until they reach floor 15; Floor 15 is the max floor for now, since this is a newly developed game, and i'm still new to javascript so this will be slappy.
   Step 5: I didn't mention but as your pokemon continues to battle they will level up; maxLVL === null as i don't yet know the max level, it will probably be level 20. */
   
   'user strict';
   
let playerChoice;

playerChoice = prompt('choose charmander, bulbasaur, squirtle, torchic, treeko, mudkip');

   switch(playerChoice) {
        case 'charmander':
            alert('you have successfully chosen charmander');
            break;
        case 'bulbasaur':
            alert('you have sucessfully chosen bulbasaur');
            break;
        case 'squirtle':
            alert('you have sucessfully chosen squirtle');
            break;
        case 'torchic':
            alert('you have successfully chosen torchic');
            break;
        case 'treeko':
            alert('you have successfully chosen treeko');
            break;
        case 'mudkip':
            alert('you have succesfully chosen mudkip');
            break;
        default:
            alert('The pokemon you have chosen is not one of the selected starters above');
    }
    
   
    
    
 class charmander {
     constructor(healthpoints, name, type) {
         this.healthpoints = healthpoints;
         this.name = name;
         this.type = fire;
         console.log(charmander === this.healthpoints);
         
     }
 }

   let Ember = { 
        damage: '65',
        type: 'fire',
        physspec: 'physical move',
        id: 'Ember',
    };
   
     let Scratch = {
        damage: '45',
        type: 'normal',
        physspec: 'special move',
        id: 'Scratch',
    };
