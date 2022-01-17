new Vue ({
    el: '#app',
    data:{
        todo:[
            {
                text : 'Fare i compiti',
                done : true
            },
    
            {
                text : 'Correre per 30 minuti',
                done : false
            },
    
           {
                text : 'Bere almeno 2 litri d\'acqua',
                done : false
            },
    
            {
                text : 'Pulire la stanza',
                done : true
            },
        ],
        addTask: '',
            
        
    },
    methods: {
        removeTask: function (index){
            this.todo.splice(index, 1)
        },

        addTaskButton: function(){
            this.todo.push({
                text: this.addTask,
                done: false
            });
            this.addTask = ''
        },
        
    }
})
        
    