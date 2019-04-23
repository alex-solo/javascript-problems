$(function() {
  var languages = [
    {
      name: 'Ruby',
      description: 'Ruby is a dynamic, reflective, object-oriented, ' +
      'general-purpose programming language. It was designed and developed in the mid-1990s ' +
      'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
      'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
      'including functional, object-oriented, and imperative. It also has a dynamic type ' +
      'system and automatic memory management.'
    },

    {
      name: 'Fake Language',
      description: "This is a simple language, not much to say about it because it is fake."
    },
  
    {
      name: 'JavaScript',
      description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
      'programming language. It has been standardized in the ECMAScript language ' +
      'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
      'technologies of World Wide Web content production; the majority of websites employ ' +
      'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
      'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
      'supporting object-oriented, imperative, and functional programming styles.'
    },
  
    {
      name: 'Lisp',
      description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
      'with a long history and a distinctive, fully parenthesized prefix notation. ' +
      'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
      'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
      'since its early days, and many dialects have existed over its history. Today, the best '+
      'known general-purpose Lisp dialects are Common Lisp and Scheme.'
    }
  ];
  var templates = {};
  var $el = $("#programming_languages");
  var charLimit = 120;

  // compile all handlebars templates
  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
  });

  // register all handlebars partials
  $("script[data-type='partial']").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  //append full descriptions
  $el.append(templates.languages({languages: languages}));

  //immediately truncate them
  var $paragraphs = $el.find("p");
  $paragraphs.each(function() {
    return $(this).text(truncate($(this)));
  });

  //on click, toggle description and button text content
  $el.on("click", "a", function(e) {
    e.preventDefault();

    var $a = $(this);
    var $par = $a.prev("p");

    if ($a.hasClass("more")) {
      $par.text(restoreDescription($par));
    } else {
      $par.text(truncate($par));
    }

    $a.toggleClass();
    $a.text(changeButtonText($a))
  });

  function restoreDescription($par) {
    var idx = $el.find("p").index($par);

    $paragraphs.eq(idx).text(function(i, txt) {
      return languages[idx].description;
    });
  }

  function truncate($par) {
    var txt = $par.text();

    if (txt.length > charLimit) {
      return txt.substr(0, charLimit) + "...";
    } else {
      return txt;
    }
  }

  function changeButtonText($a) {
    return ($a.text() === "Show More") ? "Show Less" : "Show More"; 
  }
})