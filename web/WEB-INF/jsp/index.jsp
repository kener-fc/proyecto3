<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto 3 calcu MVC</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <link type="text/css" rel="stylesheet" href="<c:url value="/resources/css/style.css" />" />        
    </head>
    <body>
        <article class="article">
           <!-- <h1>Proyecto 3, Kener Fernandez</h1> -->
            <div class="calculator demo">
                <div class="u4 display">
                    <div class="display-inner"><div class="display-text">0</div></div>
                </div>
                <button id="calculator-button-mc" class="u1 button button-gray">MC</button>
                <button id="calculator-button-sin" class="u1 button button-gray separator operator">Sin</button>
                <button id="calculator-button-clear" class="u1 button button-red">c</button>
                <button id="calculator-button-backspace" class="u1 button button-backspace button-gray">&#8592;</button>
                <button id="calculator-button-negate" class="u1 button button-gray">±</button>
                <button id="calculator-button-div" class="u1 button button-gray operator">/</button>
                
                <button id="calculator-button-m+" class="u1 button button-gray">M+</button>
                <button id="calculator-button-cos" class="u1 button button-gray separator operator">Cos</button>
                <button id="calculator-button-7" class="u1 button button-gray number">7</button>
                <button id="calculator-button-8" class="u1 button button-gray number">8</button>
                <button id="calculator-button-9" class="u1 button button-gray number">9</button>
                <button id="calculator-button-x" class="u1 button button-gray operator">x</button>
                
                <button id="calculator-button-m-" class="u1 button button-gray">M-</button>
                <button id="calculator-button-tan" class="u1 button button-gray separator operator">Tan</button>
                <button id="calculator-button-4" class="u1 button button-gray number">4</button>
                <button id="calculator-button-5" class="u1 button button-gray number">5</button>
                <button id="calculator-button-6" class="u1 button button-gray number">6</button>
                <button id="calculator-button--" class="u1 button button-gray operator">-</button>
                
                <button id="calculator-button-mr" class="u1 button button-gray">MR</button>
                <button id="calculator-button-raiz" class="u1 button button-gray separator operator">&radic;</button>
                <button id="calculator-button-1" class="u1 button button-gray number">1</button>
                <button id="calculator-button-2" class="u1 button button-gray number">2</button>
                <button id="calculator-button-3" class="u1 button button-gray number">3</button>
                <button id="calculator-button-+" class="u1 button button-gray operator">+</button>
                
                <button id="calculator-button-log" class="u1 button button-gray">log</button>
                <button id="calculator-button-pot" class="u1 button button-gray separator operator pot">X<sup>2</sup></button>
                <button id="calculator-button-0" class="u2 button button-gray number">0</button>
                <button id="calculator-button-." class="u1 button button-gray number dot">.</button>
                <button id="calculator-button-equals" class="u1 button button-blue operator">=</button>            
            </div>            
        </article>        
        <script src="<c:url value="/resources/js/jquery.js" />" type="text/javascript"></script>        
        <script src="<c:url value="/resources/js/calc_control.js" />" type="text/javascript"></script>
    </body>
</html>

