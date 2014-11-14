package uned.kener.calcuMVC.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author kener.fernandez
 */
@Controller
public class CalcuController {
    
    public CalcuController() {
        System.out.println("init CalcuController");        
    }
    
    /**
     *
     * @param left cantidad a la izquierda de la operacion
     * @param right cantidad a la derecha de la oepracion
     * @return
     */
    @RequestMapping(value = "/calcu/suma", method = GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody String suma(@RequestParam("left")int left, @RequestParam("right")int right){        
        int result = left + right;
        return String.valueOf(result);
    }
    
    /**
     *
     * @param left cantidad a la izquierda de la operacion
     * @param right cantidad a la derecha de la oepracion
     * @return
     */
    @RequestMapping(value = "/calcu/resta", method = GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody String resta(@RequestParam("left")int left, @RequestParam("right")int right){        
        int result = left - right;
        return String.valueOf(result);
    }
    
    /**
     *
     * @param left cantidad a la izquierda de la operacion
     * @param right cantidad a la derecha de la oepracion
     * @return
     */
    @RequestMapping(value = "/calcu/dividir", method = GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    String dividir(@RequestParam("left") int left, @RequestParam("right") int right) {
        int result = left / right;
        return String.valueOf(result);
    }
    
    /**
     *
     * @param left cantidad a la izquierda de la operacion
     * @param right cantidad a la derecha de la oepracion
     * @return
     */
    @RequestMapping(value = "/calcu/multiplica", method = GET)
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    String multiplica(@RequestParam("left") int left, @RequestParam("right") int right) {
        int result = left * right;
        return String.valueOf(result);
    }
}