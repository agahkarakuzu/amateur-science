const iframeDirective = {
    name: 'iframe',
    doc: 'A directive for embedding scrollable iframes with content fitting.',
    arg: { type: String, doc: 'The URL to embed in the iframe' },
    options: {
      height: { 
        type: String, 
        doc: 'Height of the iframe, e.g., `400px` or `100%`.',
        default: '400px'
      },
      width: {
        type: String,
        doc: 'Width of the iframe, e.g., `100%` or `600px`.',
        default: '100%'
      },
      scrolling: {
        type: String,
        doc: 'Scrolling behavior: `yes`, `no`, or `auto`.',
        default: 'auto'
      }
    },
    run(data) {
      const url = data.arg;
      const height = data.options.height || '400px';
      const width = data.options.width || '100%';
      const scrolling = data.options.scrolling || 'auto';
      
      return [{
        type: 'html',
        value: `
          <iframe 
            src="${url}" 
            width="${width}" 
            height="${height}" 
            frameborder="0" 
            allowfullscreen
            scrolling="${scrolling}"
            style="overflow: auto; display: block; max-width: 100%; margin: 0 auto;"
          ></iframe>
        `
      }];
    },
  };
  
  const plugin = { 
    name: 'Iframe Embed', 
    directives: [iframeDirective] 
  };
  
  export default plugin;