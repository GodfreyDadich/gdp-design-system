import React from 'react'

const GilmoreMobile = ({ style }) =>
  <div
    style={{
      position: 'relative',
      paddingTop: '170%'
    }}
    dangerouslySetInnerHTML={{
      __html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 322 548" style="position: absolute; top: 0; left: 0;"><defs><path id="a" d="M.02.166h20.342v26.117H.021z"/><path id="c" d="M.175.204C.113.204.113.266.113.266v4.898c0 4.767 3.871 8.63 8.648 8.63 4.777 0 8.65-3.863 8.65-8.63V.266c0-.062-.064-.062-.064-.062H.175z"/><path id="e" d="M.34.36h160.765v320.841H.34z"/></defs><g fill="none"><path fill="#FFF" d="M148.568 516.518c0 .565-.073.706-.4 1.024l-1.634 1.623v.035h10.53v-.035l-2.214-1.623c-.327-.248-.4-.46-.4-1.024V502.47h4.964l.883.883c.29.317.4.458.4 1.024v12.14c0 .566-.074.777-.4 1.025l-2.215 1.623v.035h12.31v-.035l-3.414-2.189c-.327-.211-.399-.423-.399-1.023v-10.517c.907-1.483 1.525-1.977 1.961-1.977.181 0 .29.105.435.388l2.034 3.953h.036l2.47-5.753c-1.017-.458-1.925-.636-2.87-.636-1.597 0-3.086.954-4.066 3.177v-2.894H154.45V497.6c0-2.118.51-2.965 1.344-2.965.29 0 .435.106.654.495l2.542 4.94h.036l2.287-5.294a22.194 22.194 0 0 0-5.701-.776c-5.156 0-7.044 2.964-7.044 7.306v.388h-2.687v.776h2.687v14.048z"/><g transform="translate(125.455 494)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path fill="#FFF" d="M7.46 26.283c2.127 0 4.106-1.293 4.912-3.233v2.946h7.99v-.036l-1.65-1.652c-.33-.324-.402-.468-.402-1.043V.165L9.916 1.1v.036l2.053 1.905c.293.251.403.467.403 1.041v6.43C11.419 8.896 9.623 7.89 7.643 7.89 3.43 7.89.021 11.303.021 17.087c0 5.784 3.334 9.196 7.44 9.196M9.99 10.01c.879 0 1.685.36 2.38 1.256v10.922c-.623 1.329-1.539 1.976-2.565 1.976-1.942 0-3.299-2.012-3.299-7.077 0-5.066 1.43-7.077 3.483-7.077" mask="url(#b)"/></g><path fill="#FFF" d="M93.575 508.01l2.68 2.862c.286.28.392.488.392 1.012v6.352c0 .942-.536 1.361-2.107 1.361-3.037 0-6.502-2.478-6.502-11.797 0-8.62 2.786-11.831 7.216-11.831 1.037 0 1.25.139 1.787 1.186l3.394 6.666h.035l3.144-7.364c-3.072-.838-6.145-1.257-8.824-1.257-7.145 0-13.79 4.712-13.79 12.6 0 8.586 5.787 12.6 12.11 12.6 2.179 0 4.635-.466 6.701-1.33l3.196 1.33h.036v-8.865c0-.489.035-.733.106-1.012l.68-2.513v-.035H93.574v.035zm87.58 12.39c3.702 0 6.758-2.46 7.98-6.504h-.108c-1.186 2.004-3.09 3.234-5.14 3.234-3.298 0-5.45-2.063-5.462-6.503h10.314a5.55 5.55 0 0 0 .108-1.16c0-4.29-2.983-7.067-7.656-7.067-4.888 0-8.878 3.516-8.878 9.141 0 5.449 3.775 8.859 8.842 8.859m.036-17.296c1.617 0 2.192 1.406 2.192 5.976v.914h-4.952c.08-5.695 1.267-6.89 2.76-6.89"/><path fill="#FFF" d="M190.275 506.56l6.774 15.874-.453 1.05c-.58 1.37-1.109 2.29-1.704 2.991a3.66 3.66 0 0 0 .18-1.147c0-1.953-1.562-3.47-3.57-3.47-2.007 0-3.57 1.517-3.57 3.47 0 1.954 1.563 3.472 3.57 3.472 2.306 0 4.128-1.482 5.578-4.846l6.618-15.37c.15-.325.261-.578.484-.94l2.975-5.208v-.036h-6.396v.036l2.119 5.317c.187.433.187.686.075.976l-2.779 6.446-3.914-9.846c-.186-.47-.15-.759.186-1.084l1.933-1.809v-.036h-10.448v.036l1.971 3.363c.148.29.223.398.371.76m-26.133 38.874c-.63 0-.888-.316-.888-.808v-7.91c0-4.114-1.776-6.715-7.808-6.715-2.369 0-4.663.35-7.327 1.23l2.331 5.274h.037l2.776-5.31c.222-.42.37-.491.924-.491 1.851 0 3.072 1.441 3.072 3.62v4.044c-1-.633-2.48-1.055-4.144-1.055-3.553 0-6.033 2.32-6.033 5.52 0 2.989 2.258 5.168 5.256 5.168 2.135 0 4.02-1.082 4.951-3.009.299 2.151 1.785 3.009 3.93 3.009 2.368 0 3.885-1.406 3.885-3.2h-.111c-.222.423-.48.633-.851.633zm-6.92-1.019c-.555.703-1.258 1.02-2.11 1.02-1.258 0-2.256-1.196-2.256-3.411 0-2.285 1.072-3.515 2.812-3.515.592 0 1.221.246 1.554.562v5.344zm75.435-.277v-9.008c0-3.47-1.88-5.993-5.787-5.993-2.53 0-4.556 1.472-5.424 3.33V521.6l-8.282.912v.035l2.026 1.857c.289.245.398.455.398 1.016v18.717c0 .56-.073.736-.398 1.017l-1.736 1.612v.034h10.162v-.034l-1.772-1.612c-.326-.281-.398-.457-.398-1.017v-10.9c.724-.807 1.663-1.297 2.64-1.297 1.808 0 2.712 1.261 2.712 3.504v8.693c0 .56-.072.736-.397 1.017l-1.773 1.612v.034h10.163v-.034l-1.736-1.612c-.325-.281-.398-.457-.398-1.017m-19.599-2.29c-1.1 1.723-2.947 2.884-4.722 2.884-2.485 0-4.579-2.25-4.579-6.786 0-5.59 1.349-7.242 3.16-7.242.497 0 .745.105.958.492l2.804 5.59h.036l2.379-5.555c-2.415-.88-4.687-1.23-6.78-1.23-4.829 0-8.77 3.515-8.77 9.14 0 5.73 3.515 8.86 8.201 8.86 3.373 0 6.39-2.39 7.42-6.153h-.107zm-29.456 3.103V521.6l-8.488.944v.037l2.076 1.924c.296.254.408.472.408 1.053v6.5c-.964-1.634-2.781-2.65-4.783-2.65-4.263 0-7.71 3.45-7.71 9.296 0 5.846 3.373 9.296 7.525 9.296 2.15 0 4.151-1.307 4.968-3.268v2.977h7.932v-.035l-1.52-1.67c-.296-.364-.408-.546-.408-1.054zm-6.004-1.09c-.63 1.344-1.558 1.998-2.596 1.998-1.964 0-3.336-2.034-3.336-7.154s1.446-7.153 3.522-7.153c.89 0 1.705.362 2.41 1.27v11.04zm-44.426-21.06h-11.321v.036l2.3 2.177c.324.285.396.536.396 1.036v18.703c0 .5-.072.75-.396 1.035l-2.3 2.177V548h11.321c8.375 0 13.91-4.711 13.91-12.6 0-7.889-5.535-12.6-13.91-12.6m-.36 24.487h-.682c-.755 0-1.042-.322-1.042-1.428v-22.345h1.725c5.176 0 7.188 2.641 7.188 11.886s-2.012 11.887-7.188 11.887m62.453-2.045V530h-8.535v.036l1.854 1.67c.348.29.424.47.424 1.052v12.484c0 .508-.115.69-.424 1.053l-1.583 1.67V548h10.543v-.035l-1.854-1.67c-.348-.29-.425-.472-.425-1.053M114.642 502.4c-5.685 0-9.612 3.34-9.612 9s3.927 9 9.612 9c5.685 0 9.612-3.34 9.612-9s-3.927-9-9.612-9m0 17.297c-1.945 0-2.992-1.266-2.992-8.297 0-7.031 1.047-8.297 2.992-8.297s2.992 1.266 2.992 8.297c0 7.031-1.047 8.297-2.992 8.297"/><path fill="#00AD68" d="M238.395 540.8c-2.027 0-3.604 1.575-3.604 3.6 0 2.025 1.577 3.6 3.604 3.6 2.028 0 3.605-1.575 3.605-3.6 0-2.025-1.577-3.6-3.605-3.6M160.847 446c9.86 0 17.852-8.01 17.852-17.89s-7.992-17.89-17.852-17.89-17.852 8.01-17.852 17.89S150.988 446 160.847 446"/><path fill="#000" d="M167.58 415.136s.063 0 .063.064v17.171s0 .064-.063.064h-4.898c-4.766 0-8.63-3.873-8.63-8.65 0-4.776 3.864-8.649 8.63-8.649h4.898z"/><path fill="#FFF" d="M154.115 441.083s-.063 0-.063-.063v-17.17s0-.064.063-.064h4.897c4.767 0 8.63 3.873 8.63 8.65 0 4.776-3.863 8.648-8.63 8.648h-4.897z"/><g transform="rotate(-90 297.522 143.674)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path fill="#0C8F93" d="M26.06 13.732s0 .063-.064.063H8.824s-.063 0-.063-.063V8.834c0-4.766 3.873-8.63 8.65-8.63 4.776 0 8.648 3.864 8.648 8.63v4.898z" mask="url(#d)"/></g><g fill="#018B9B"><path d="M125.171 410.191h71.298c0-16.998-11.845-31.22-27.715-34.836h-15.868c-15.87 3.615-27.715 17.838-27.715 34.836"/><path d="M152.886 375.355h15.868a35.685 35.685 0 0 0-7.934-.889c-2.727 0-5.383.308-7.934.89"/></g><path fill="#04B0BF" d="M107.346 375.355h45.54a35.685 35.685 0 0 1 7.934-.889c2.727 0 5.383.308 7.934.89h45.54c0-13.727-5.152-26.245-13.621-35.726h-79.706c-8.469 9.48-13.62 22-13.62 35.725"/><path fill="#00B8B5" d="M160.82 321.767c-15.836 0-30.062 6.9-39.853 17.863h79.706c-9.792-10.962-24.017-17.863-39.853-17.863"/><path fill="#018B9B" d="M152.886 375.355h15.868a35.685 35.685 0 0 0-7.934-.889c-2.727 0-5.383.308-7.934.89"/><path fill="#00B8B5" d="M162.018 321.767c-15.836 0-30.061 6.9-39.853 17.863h79.706c-9.791-10.962-24.017-17.863-39.853-17.863"/><path fill="#5DBBBC" d="M89.522 339.63h31.445c9.791-10.962 24.017-17.863 39.853-17.863 15.836 0 30.061 6.901 39.853 17.863h31.445c0-13.015-3.474-25.215-9.541-35.725H99.063c-6.067 10.51-9.541 22.71-9.541 35.725"/><path fill="#C0BB6B" d="M160.82 268.18c-26.39 0-49.43 14.369-61.757 35.725h123.514c-12.328-21.356-35.367-35.726-61.757-35.726"/><path fill="#C0BB6B" d="M162.018 268.18c-26.39 0-49.429 14.369-61.757 35.725h123.515c-12.328-21.356-35.368-35.726-61.758-35.726"/><path fill="#E3BA3C" d="M222.577 303.905h27.365c0-12.704-2.652-24.784-7.423-35.725h-81.7c26.39 0 49.43 14.369 61.758 35.725"/><path fill="#E3BA3C" d="M160.82 268.18h-81.7c-4.77 10.94-7.422 23.021-7.422 35.725h27.365c12.327-21.356 35.367-35.726 61.757-35.726"/><path fill="#E99D28" d="M214.298 232.454H107.341a89.592 89.592 0 0 0-28.22 35.725H242.52a89.593 89.593 0 0 0-28.222-35.725"/><path fill="#E68026" d="M160.82 214.592c-20.066 0-38.582 6.647-53.479 17.862h106.957c-14.896-11.215-33.412-17.862-53.478-17.862"/><g><path fill="#ED8027" d="M107.341 232.454H59.967c-3.942 11.175-6.094 23.197-6.094 35.725H79.12a89.59 89.59 0 0 1 28.221-35.725M242.52 268.18h25.247c0-12.529-2.152-24.55-6.094-35.726h-47.375a89.59 89.59 0 0 1 28.221 35.725"/><path fill="#EC6725" d="M81.114 196.729a107.143 107.143 0 0 0-21.147 35.725h47.374c14.897-11.215 33.413-17.862 53.479-17.862 20.066 0 38.582 6.647 53.478 17.862h47.375a107.135 107.135 0 0 0-21.147-35.725H81.114z"/><path fill="#E95127" d="M81.114 196.729h159.412c-19.583-21.924-48.034-35.725-79.706-35.725-31.672 0-60.124 13.801-79.706 35.725"/><path fill="#E99D28" d="M215.497 232.454H108.54a89.592 89.592 0 0 0-28.22 35.725h163.398a89.593 89.593 0 0 0-28.221-35.725"/><path fill="#E68026" d="M162.018 214.592c-20.066 0-38.582 6.647-53.478 17.862h106.957c-14.897-11.215-33.412-17.862-53.479-17.862"/></g><g><path fill="#E68026" d="M162.018 214.592c-20.066 0-38.582 6.647-53.478 17.862h106.957c-14.897-11.215-33.412-17.862-53.479-17.862"/><path fill="#EC6725" d="M81.114 196.729a107.143 107.143 0 0 0-21.147 35.725h47.374c14.897-11.215 33.413-17.862 53.479-17.862 20.066 0 38.582 6.647 53.478 17.862h47.375a107.135 107.135 0 0 0-21.147-35.725H81.114z"/><path fill="#E95127" d="M81.114 196.729h159.412c-19.583-21.924-48.034-35.725-79.706-35.725-31.672 0-60.124 13.801-79.706 35.725"/><path fill="#F0572D" d="M261.673 232.454h23.918c0-12.414-1.805-24.405-5.167-35.725h-39.898a107.143 107.143 0 0 1 21.147 35.725M41.216 196.729c-3.362 11.32-5.168 23.311-5.168 35.725h23.919a107.143 107.143 0 0 1 21.147-35.725H41.216z"/><path fill="#EE412B" d="M160.82 161.004H58.415a124.64 124.64 0 0 0-17.2 35.725h39.9c19.582-21.924 48.033-35.725 79.705-35.725m0 0c31.672 0 60.123 13.801 79.706 35.725h39.898a124.64 124.64 0 0 0-17.199-35.725H160.82z"/><path fill="#EE302C" d="M263.225 161.004c-22.547-32.393-60.005-53.588-102.405-53.588S80.962 128.61 58.415 161.004h204.81z"/></g><g><path fill="#E95127" d="M81.114 196.729h159.412c-19.583-21.924-48.034-35.725-79.706-35.725-31.672 0-60.124 13.801-79.706 35.725"/><path fill="#EE412B" d="M160.82 161.004H58.415a124.64 124.64 0 0 0-17.2 35.725h39.9c19.582-21.924 48.033-35.725 79.705-35.725m0 0c31.672 0 60.123 13.801 79.706 35.725h39.898a124.64 124.64 0 0 0-17.199-35.725H160.82z"/><path fill="#EE302C" d="M263.225 161.004c-22.547-32.393-60.005-53.588-102.405-53.588S80.962 128.61 58.415 161.004h204.81z"/><path fill="#DE4838" d="M22.717 161.004a143.444 143.444 0 0 0-4.493 35.725h22.992a124.64 124.64 0 0 1 17.199-35.725H22.717zm257.707 35.725h22.992c0-12.336-1.56-24.307-4.493-35.725h-35.698a124.64 124.64 0 0 1 17.199 35.725"/><path fill="#D72637" d="M160.82 53.828c-66.444 0-122.274 45.542-138.103 107.176h35.698c22.547-32.393 60.006-53.588 102.405-53.588 42.4 0 79.858 21.195 102.405 53.588h35.698C283.093 99.37 227.263 53.828 160.82 53.828"/></g><g><path fill="#EE302C" d="M263.225 161.004c-22.547-32.393-60.005-53.588-102.405-53.588S80.962 128.61 58.415 161.004h204.81z"/><path fill="#D72637" d="M160.82 53.828c-66.444 0-122.274 45.542-138.103 107.176h35.698c22.547-32.393 60.006-53.588 102.405-53.588 42.4 0 79.858 21.195 102.405 53.588h35.698C283.093 99.37 227.263 53.828 160.82 53.828"/><g transform="rotate(-90 80.692 80.653)"><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><path fill="#A8223B" d="M.34.36v22.318c61.635 15.83 107.177 71.659 107.177 138.103S61.975 283.054.34 298.884v22.317c88.788 0 160.764-71.823 160.764-160.42C161.105 72.183 89.13.36.341.36" mask="url(#f)"/></g></g></g></svg>'
    }}
  />

export default GilmoreMobile
