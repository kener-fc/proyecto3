/* 
 * Manejador de la Calculadora
 * Kener Fernandez
 * 
 */
var CalcuFlujo = {};
CalcuFlujo = {
    data : {
      suma : {
        prioridad: 3,
        nombre: 'suma',
        serviceURL: '/CalcuMVC/rest/calcu/suma/',
        boton: '+',
        left: NaN,
        right: NaN
      },
      
      resta : {
        prioridad: 3,
        nombre: 'resta',
        serviceURL: '/CalcuMVC/rest/calcu/resta/',
        boton: '-',
        left: NaN,
        right: NaN
      },
      
      div : {
        prioridad: 2,
        nombre: 'dividir',
        serviceURL: '/CalcuMVC/rest/calcu/dividir/',
        boton: '/',
        left: NaN,
        right: NaN
      },
      
      multi : {
        prioridad: 2,
        nombre: 'multiplica',
        serviceURL: '/CalcuMVC/rest/calcu/multiplica/',
        boton: 'x',
        left: NaN,
        right: NaN
      }
      
      //todas las otras operaciones son prioridad 1, raiz, sen, cos, tan
    },
    
    //array de operaciones, para cuando hay operaciones combinadas
    operaciones: [],
    
    operacionActual: {},
    
    // numero digitado antes o despues de un operador
    numeroActual: '',
    
    updateDisplay : function (add) {
        if (this.$display.text() === '0' && (add !== '.')){
            this.$display.text(add);
        }        
        else{
            this.$display.text(this.$display.text() + add);
        }
    },
    
    onNumberClicked : function (e){
        e.preventDefault();
        console.log("onNumberCliked: " +  $(e.currentTarget).text());
        this.updateDisplay($(e.currentTarget).text());
        this.numeroActual = this.numeroActual + $(e.currentTarget).text();
    },
    
    onOperationClicked : function (e) {
        e.preventDefault();
        console.log("onOperationClicked: " +  $(e.currentTarget).text());
        
        if (this.operacionActual.boton && (this.operacionActual.boton === $(e.currentTarget).text())) {
            return;
        }  
        
        if (Object.keys(this.operacionActual).length !== 0){
           this.operacionActual.right = this.numeroActual;
           this.operaciones.push(this.operacionActual);
           this.operacionActual = {};
        }
        
        switch ($(e.currentTarget).text()) {
            case '+':
                if (Object.keys(this.operacionActual).length === 0){
                    this.operacionActual = this.data.suma;
                    this.operacionActual.left = this.numeroActual;
                    this.numeroActual = '';
                    this.updateDisplay('+');
                }
            break;
            
            case '-': 
                if (Object.keys(this.operacionActual).length === 0){
                    this.operacionActual = this.data.resta;
                    this.operacionActual.left = this.numeroActual;
                    this.numeroActual = '';
                    this.updateDisplay('-');
                }
            break;
            
            case '/':
                if (Object.keys(this.operacionActual).length === 0){
                    this.operacionActual = this.data.div;
                    this.operacionActual.left = this.numeroActual;
                    this.numeroActual = '';
                    this.updateDisplay('/');
                }
            break;
            
            case 'x': 
                if (Object.keys(this.operacionActual).length === 0){
                    this.operacionActual = this.data.multi;
                    this.operacionActual.left = this.numeroActual;
                    this.numeroActual = '';
                    this.updateDisplay('x');
                }
            break;
            
            case '=':  
                this.operacionActual = {};
                if(this.operaciones.length !== 0){
                    this.ejecutarOperaciones();
                }
            break;
        }
        
    },
    
    ejecutarOperaciones: function () {
        //ordenar el array segun la prioridad de la operacion si hay mas de 1     
        //bloquear los botones
        if (this.operaciones.length > 1){
            this.operaciones.sort(function(a,b) { return parseFloat(a.prioridad) - parseFloat(b.prioridad); } );            
            //llamar los servicios de las operaciones
        }
        else {
            //solo hay una operacion ejecutar esa
            this.ejecutarOperacion(this.operaciones[0]);
        }                
    },
    
    ejecutarOperacion: function (data) {
        var params = '';
        if (data.prioridad === 2 || data.prioridad === 3) {
            params = 'left='+data.left+'&right='+data.right;
        }
        else {
            //es una operacion de un parametro
        }
        
        $.ajax({
            type: 'get',
            url: data.serviceURL,
            data: params,
            success: $.proxy(this.operacionCompleta, this)
        });
    },
    
    operacionCompleta : function (data){
        if (this.operaciones.length === 1){
            this.$display.text(data);
            this.numeroActual = data;
            this.operaciones = [];
        }
        else{
            //remover del array la opereacion realizada y llamar la siguiente
            //ademas acumular el resultado
        }
    },
    
    clearDisplay: function (e){
        console.log('clearDisplay');
        e.preventDefault();
        this.$display.text("0");  
        this.numeroActual = 0;
    },
    
    setEvents: function () {
        //Click de los numeros
        $('.number').on('click', $.proxy(this.onNumberClicked, this));
        //Click de las operaciones
        $('.operator').on('click', $.proxy(this.onOperationClicked, this));
        //Boton de clear
        $('#calculator-button-clear').on('click',$.proxy(this.clearDisplay, this));
    },
    
    init : function () {
        console.log('init calcu flujo.');
        this.$display = $('article .calculator .display-text');
        this.displayContet = '';
        
        this.setEvents();
    }
};

$(function () {
    CalcuFlujo.init();
});