//Codigo para a nav bar lateral

jQuery(document).ready(function() {
  
  const sections = document.querySelectorAll('section');
  const circlesnav = document.querySelector('.circlesnav');

  
  let startIndex = 0;
  if (window.location.hash) {
    const sectionId = window.location.hash.slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      startIndex = [...sections].indexOf(section);
    } else if (sections.length > 0) {
      const rect = sections[0].getBoundingClientRect();
      const headerHeight = document.querySelector('.header').offsetHeight;
      if (rect.top - headerHeight <= window.innerHeight / 2) {
        startIndex = 0;
      }
    }
  }
  if (startIndex === -1 && sections.length > 0) {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      const headerHeight = document.querySelector('.header').offsetHeight;
      if (rect.top - headerHeight <= window.innerHeight / 2) {
        startIndex = i;
        break;
      }
    }
  }

  window.addEventListener('scroll', () => {

    const headerHeight = document.querySelector('.header').offsetHeight;

  
    if (window.scrollY >= 100) {
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top - headerHeight <= window.innerHeight / 2) {
          startIndex = i;
        }
      }

      
      if (circlesnav && sections.length > 0 && startIndex >= 1 && startIndex + 1 >= 2) {
        circlesnav.classList.add('visible');
      } else if (circlesnav) {
        circlesnav.classList.remove('visible');
      }
    } else if (circlesnav) {
      circlesnav.classList.remove('visible');
    }
  });
});

//Mudar a cor de acordo com a section

jQuery(document).ready(function() {
  jQuery(document).on('scroll', function() {
    var scrollPosition = jQuery(this).scrollTop();

    // Loop through each section
    jQuery('section[id^="section-"]').each(function() {
      var sectionTop = jQuery(this).offset().top;
      var sectionBottom = sectionTop + jQuery(this).outerHeight();

      // If the user has scrolled to this section, mark it as active
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var sectionId = jQuery(this).attr('id').replace('section-', '');
        jQuery('.circlesnav li').removeClass('active');
        jQuery('.circlesnav li a[href="' + window.location.hash + '"]').parent().addClass('active');
      }
    });
  });
});


//Codigo para o formulario

function calcularRisco() {

  var fumo = parseInt(document.getElementById("fumo").value);
  var idade = parseInt(document.getElementById("idade").value);
  var peso = parseInt(document.getElementById("peso").value);
  var atividadeFisica = parseInt(document.getElementById("atividade-fisica").value);
  var historicoFamiliar = parseInt(document.getElementById("historico-familiar").value);
  var diabetes = parseInt(document.getElementById("diabetes").value);


  var escore = fumo + idade + peso + atividadeFisica + historicoFamiliar + diabetes;


  var mensagem = "";
  if (escore <= 10) {
    mensagem = "Seu risco de desenvolver uma doença cardiovascular é baixo. É importante lembrar que o teste não é um indicativo 100% certeiro, e é sempre recomendável consultar um medico especializado, e mesmo com resultados positivos, sempre prestar atenção em sintomas como falta de ar, dor no peito, palpitações e tontura.";
  } else if (escore <= 20) {
    mensagem = "Seu risco de desenvolver uma doença cardiovascular é moderado. É importante lembrar que o teste não é um indicativo 100% certeiro, e é sempre recomendável consultar um medico especializado, e mesmo com resultados positivos, sempre prestar atenção em sintomas como falta de ar, dor no peito, palpitações e tontura.";
  } else if (escore <= 30) {
    mensagem = "Seu risco de desenvolver uma doença cardiovascular é alto. É importante lembrar que o teste não é um indicativo 100% certeiro, e que é sempre recomendável consultar um medico especializado, e mesmo com resultados positivos, sempre prestar atenção em sintomas como falta de ar, dor no peito, palpitações e tontura.";
  } else {
    mensagem = "Seu risco de desenvolver uma doença cardiovascular é muito alto. É importante lembrar que o teste não é um indicativo 100% certeiro, e que é sempre recomendável consultar um medico especializado, e mesmo com resultados positivos, sempre prestar atenção em sintomas como falta de ar, dor no peito, palpitações e tontura.";
  }


  var resultado = document.getElementById("resultado");
  resultado.innerHTML = mensagem;
  resultado.classList.remove('show');
  resultado.offsetWidth;
  resultado.classList.add('show');
}


