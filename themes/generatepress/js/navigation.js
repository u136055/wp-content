/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens
 */
(function ( $ ) {
	$.fn.GenerateMobileMenu = function( options ) {
		// Set the default settings
		var settings = $.extend({
			menu: '.main-navigation',
			dropdown_toggle: true
		}, options );
		
		// Bail if our menu doesn't exist
		if ( ! $( settings.menu ).length ) {
			return;
		}
		
		// Add dropdown toggle that display child menu items.
		if ( settings.dropdown_toggle ) {
			$( settings.menu + ' .menu-item-has-children > a' ).after( '<a href="#" class="dropdown-toggle" aria-expanded="false"><i class="fa fa-caret-down"></i></a>' );
		}
		
		// Open the mobile menu
		$( this ).on( 'click', function( e ) {
			e.preventDefault();
			$( this ).closest( settings.menu ).toggleClass( 'toggled' );
			$( this ).closest( settings.menu ).attr( 'aria-expanded', $( this ).closest( settings.menu ).attr( 'aria-expanded' ) === 'true' ? 'false' : 'true' );
			$( this ).toggleClass( 'toggled' );
			$( this ).children( 'i' ).toggleClass( 'fa-bars' ).toggleClass( 'fa-close' );
			$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
			return false;
		});
	};
}( jQuery ));

jQuery( document ).ready( function( $ ) {
	// Initiate our mobile menu
	$( '#site-navigation .menu-toggle' ).GenerateMobileMenu();
	
	// Build the mobile button that displays the dropdown menu
	$( document ).on( 'click', 'nav .dropdown-toggle', function( e ) {
		e.preventDefault();
		$( this ).toggleClass( 'toggle-on' );
		$( this ).next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
		$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		$( this ).html( $( this ).html() === '<i class="fa fa-caret-down"></i>' ? '<i class="fa fa-caret-up"></i>' : '<i class="fa fa-caret-down"></i>' );
		return false;
	});
});