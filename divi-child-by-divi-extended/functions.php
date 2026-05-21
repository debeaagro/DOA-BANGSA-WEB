<?php
/**
 * Divi Child by Divi Extended
 *
 * Functions and definitions for the child theme.
 *
 * @package Divi_Child_by_Divi_Extended
 * @since 1.0.0
 *
 * Generated with Divi Extended Child Theme Generator
 * https://diviextended.com/divi-child-theme-generator/
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DIVIEXTENDED_FDCTG_VERSION', '1.0.0' );
define( 'DIVIEXTENDED_FDCTG_DIR', get_stylesheet_directory() );
define( 'DIVIEXTENDED_FDCTG_URI', get_stylesheet_directory_uri() );

/**
 * Enqueue parent and child theme stylesheets.
 *
 * @since 1.0.0
 * @return void
 */
function diviextended_fdctg_enqueue_styles() {

	wp_enqueue_style(
		'divi-style',
		get_template_directory_uri() . '/style.css',
		array(),
		wp_get_theme( get_template() )->get( 'Version' )
	);

	wp_enqueue_style(
		'divi-child-style',
		get_stylesheet_uri(),
		array( 'divi-style' ),
		DIVIEXTENDED_FDCTG_VERSION
	);

	wp_enqueue_style(
		'divi-child-custom',
		DIVIEXTENDED_FDCTG_URI . '/assets/css/custom.css',
		array( 'divi-child-style' ),
		DIVIEXTENDED_FDCTG_VERSION
	);

}
add_action( 'wp_enqueue_scripts', 'diviextended_fdctg_enqueue_styles' );

/**
 * Enqueue child theme scripts.
 *
 * @since 1.0.0
 * @return void
 */
function diviextended_fdctg_enqueue_scripts() {

	wp_enqueue_script(
		'divi-child-custom',
		DIVIEXTENDED_FDCTG_URI . '/assets/js/custom.js',
		array( 'jquery' ),
		DIVIEXTENDED_FDCTG_VERSION,
		true
	);

}
add_action( 'wp_enqueue_scripts', 'diviextended_fdctg_enqueue_scripts' );

/**
 * Theme setup.
 *
 * @since 1.0.0
 * @return void
 */
function diviextended_fdctg_setup() {

	load_child_theme_textdomain( 'divi-child', DIVIEXTENDED_FDCTG_DIR . '/languages' );

}
add_action( 'after_setup_theme', 'diviextended_fdctg_setup' );
