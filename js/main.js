//Splide

var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ], {
    type:'loop',
    perPage: 3,
    perMove: 1,
    cover  : true,
    height : '15em',
    gap: '2em',
    breakpoints: {
      700: {
        perPage: 2
      },
      500: {
        perPage: 1,
        height : '15em'
      }
    }
  } ).mount();
}
