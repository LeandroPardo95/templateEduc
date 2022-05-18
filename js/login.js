const d = document;

export function close_Login(div, btnLogin, btnRegister) {
    
    const $parent = d.querySelector(div),
        $template_Reg_1 = d.getElementById('form-register-1').content,
        $template_Reg_2 = d.getElementById('form-register-2').content;

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnLogin)) $parent.classList.add('hidden') // obvio que en realidad aca se debe realizar la verificacion de los datos, pero como es solo el maquetado hacemos de cuenta que es correcto.

        if(e.target.matches(btnRegister)) {

            console.log($parent.childNodes)

            $parent.removeChild(d.querySelector('.form-login'))

            $parent.appendChild($template_Reg_1)
     
        }
        if(e.target.matches(".success.step-2")) {

            console.log($parent.childNodes)

            $parent.removeChild(d.querySelector('.form-register'))

            $parent.appendChild($template_Reg_2)
     
        }

    })


}