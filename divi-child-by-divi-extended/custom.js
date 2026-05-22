/**
 * Divi Child by Divi Extended - Custom Scripts
 *
 * Ultra-robust Vanilla JS to parse bracket parameters like [tanggal: ...] and [waktu: ...]
 * and render them with inline-styled SVG icons that override any CSS issues.
 *
 * @package Divi_Child_by_Divi_Extended
 * @since 1.0.0
 */

document.addEventListener("DOMContentLoaded", function() {
    function parseEventMeta() {
        // Target all slide list items under MetaSlider 1508
        var slides = document.querySelectorAll('.metaslider-1508 .slides li');
        slides.forEach(function(slide) {
            // Avoid duplicate parsing on already processed slides
            if (slide.classList.contains('meta-parsed')) return;

            // Search all possible text containers within the slide
            var textElements = slide.querySelectorAll('p, h2, h3, h4, a, span, .caption, .caption-wrap, .ms-caption');
            
            textElements.forEach(function(el) {
                var rawText = el.innerText || el.textContent || '';
                if (!rawText) return;

                // Forgiving regex that allows spaces inside brackets
                var dateRegex = /\[\s*tanggal\s*:\s*([^\]]+)\]/i;
                var timeRegex = /\[\s*waktu\s*:\s*([^\]]+)\]/i;

                var hasDate = dateRegex.test(rawText);
                var hasTime = timeRegex.test(rawText);

                if (hasDate || hasTime) {
                    var dateMatch = rawText.match(dateRegex);
                    var timeMatch = rawText.match(timeRegex);
                    
                    var dateText = dateMatch ? dateMatch[1].trim() : '';
                    var timeText = timeMatch ? timeMatch[1].trim() : '';

                    // Clean the bracket text from the title
                    var cleanText = rawText.replace(dateRegex, '').replace(timeRegex, '').trim();

                    // If it is a leaf element, update its text directly
                    if (el.children.length === 0 || (el.children.length === 1 && el.children[0].tagName === 'A')) {
                        el.innerText = cleanText;
                    } else {
                        var html = el.innerHTML;
                        html = html.replace(dateRegex, '').replace(timeRegex, '').trim();
                        el.innerHTML = html;
                    }

                    // Locate caption box or parent element to append the meta row
                    var captionBox = slide.querySelector('.caption') || slide.querySelector('.caption-wrap') || slide.querySelector('.ms-caption') || el.parentElement;
                    
                    if (captionBox && !captionBox.querySelector('.event-meta-row')) {
                        var metaRow = document.createElement('div');
                        metaRow.className = 'event-meta-row';
                        
                        // Force explicit inline styles on SVGs to override theme resets
                        var htmlContent = '';
                        if (dateText) {
                            htmlContent += '<span class="event-meta-item event-date" style="display:inline-flex !important; align-items:center !important; margin-right:15px !important; font-size:13px !important; color:#64748b !important; font-family:sans-serif !important;">' +
                                '<svg class="meta-icon" viewBox="0 0 24 24" style="width:14px !important; height:14px !important; fill:#0c543a !important; display:inline-block !important; vertical-align:middle !important; margin-right:5px !important; min-width:14px !important;"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H5V9h14v10zm-7-7h5v5h-5z"/></svg>' +
                                '<span>' + dateText + '</span>' +
                                '</span>';
                        }
                        if (timeText) {
                            htmlContent += '<span class="event-meta-item event-time" style="display:inline-flex !important; align-items:center !important; font-size:13px !important; color:#64748b !important; font-family:sans-serif !important;">' +
                                '<svg class="meta-icon" viewBox="0 0 24 24" style="width:14px !important; height:14px !important; fill:#0c543a !important; display:inline-block !important; vertical-align:middle !important; margin-right:5px !important; min-width:14px !important;"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>' +
                                '<span>' + timeText + '</span>' +
                                '</span>';
                        }
                        
                        metaRow.innerHTML = htmlContent;
                        captionBox.appendChild(metaRow);
                    }

                    // Mark slide as parsed
                    slide.classList.add('meta-parsed');
                }
            });
        });
    }

    // Run parsing immediately
    parseEventMeta();

    // Check periodically for lazy loading slides
    var checkExist = setInterval(parseEventMeta, 300);
    setTimeout(function() {
        clearInterval(checkExist);
    }, 15000);
});
