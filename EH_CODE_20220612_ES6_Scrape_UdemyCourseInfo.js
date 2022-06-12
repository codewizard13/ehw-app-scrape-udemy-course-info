/*
Project Name:   EHW APP: Scrape Udemy Course Details
Main Prj File:  App.js

This Filename:  App.js
Date Created:   06/12/22
Date Updated:   --
Programmer:     Eric L. Hepperle

File Version:    1.00.00

File Purpose:
  This JavaScript file contains the main "business logic" and primary
  mechanics of the current project. This project scrapes Udemy course
  details from a Udemy page.

TAGS:   Eric Hepperle, JavaScript, ES6, DOM Manipulation, App, Eric L. Hepperle

Usage:
  Navigate to any Udemy course page and paste this code into the
  browser developer console and hit enter to run.

Sample results: 
--

Requires:
  * Browser
  * Udemy account
  * Logged into Udemy and logged into a registered course
  * #GOTCHA: You must manually open each chapter accordion
    
Demonstrates:
  * Vanilla JavaScript
  * JavaScript ES6/ECMAScript2015
  * ES6 web scraping
  * DOM Traversal
*/


clear();

// SELECTOR VARS
sel_chGroups = '[data-purpose^="section-panel"]'
sel_subchGroups = '[class*="curriculum-item-link--item-container"]'
sel_subchName = '[data-purpose="item-title"]'
sel_resGroup = '[class*=resource--ellipsis]'

res_out_head = "##### RESOURCES:\n"
res_out = ''

chGroups = document.querySelectorAll(sel_chGroups)
chGroups.forEach(function (chGroup, c) {
  ch_name = chGroup.querySelector('h3').innerText
  console.log("### ", ch_name)

  subchGroups = chGroup.querySelectorAll(sel_subchGroups)
  subchGroups.forEach(function (subchGroup, s) {
    // console.log(`${c+1}-${s+1}`)
    subch_name = subchGroup.querySelector(sel_subchName)

    // console.log('#### ', subch_name ? subch_name.innerText : '')
    if (subch_name != '' && subch_name != null) {
      console.log('#### ', subch_name.innerText)
    }
    
    // RESOURCES
    resources = subchGroup.querySelectorAll(sel_resGroup)
    resources.forEach(function (res, r) {
      
      // Only print resources at the end of chapter
      
      if (res != '') {
        res_out += `- ${res.innerText}\n`
      }
      
    }) // end resources
    
  }) // end subchGroups
  
  console.log(res_out)
  res_out = res_out_head
  
})