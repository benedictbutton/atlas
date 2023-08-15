const Ischium = ({ bone, zoomIn, handleZoom, className }) => {
  return (
    <g id="pelvis">
      <g id="ischium" className={className} onClick={handleZoom}>
        <path
          data-bone="pelvic girdle"
          d="m174.42 389.56c1.445-2.521 4.873-5.618 5.351-8.24 0.636-3.487-3.673-4.885-6.077-6.953-2.549-2.192-3.363-4.174-6.827-4.662-3.307-0.466-7.498-1.073-10.823-0.632-2.893 0.384-6.688 0.904-8.367 3.218-1.997 2.754-2.437 9.078-0.269 11.532 2.374 2.684 6.24 3.764 8.843 6.177 3.878 3.596 5.747 7.578 4.907 12.582-0.787 4.688-0.273 7.283 3.873 9.857 2.389 1.483 4.93 4.063 7.511 4.927 2.914 0.976 9.766 0.63 12.807 2e-3 5.656-1.171 8.03-7.883 13.898-8.332 5.969-0.456 9.586 5.047 14.777 6.988 6.665 2.492 15.139 4.35 21.463-0.159 5.404-3.852 4.903-9.069 5.451-14.913 0.591-6.279 3.285-11.451 7.678-15.924 0.038 0.282 0.018 0.56 0.044 0.793 2.768-2.007 3.312-5.777 3.167-9.248-0.205-4.953-4.885-4.264-8.403-3.331-4.04 1.07-5.345 0.129-9.055-0.31-3.225-0.381-5.351 1.725-7.583 3.747-2.874 2.6-7.558 5.451-6.016 9.584 7.786 1.78 12.519 15.145 7.199 21.376-1.684 1.973-6.495 2.857-8.948 2.145-2.862-0.83-3.768-3.471-6.063-4.847-2.306-1.382-6.654-1.263-9.306-1.526-8.722-0.866-15.839 5.605-24.401 4.099-5.629-0.991-6.068-2.87-7.336-8.006-0.977-3.947 0.582-6.591 2.505-9.944z"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#f9ce82'
          }
          stroke="#967348"
          stroke-width=".3218"
        />
        <path
          data-bone="pelvic girdle"
          d="m209.28 404.2c-4.927-1.708 0.588 5.267 1.429 6.061 2.517 2.378 5.651 5.069 9.263 4.951-0.209-0.388-0.299-0.909-0.527-1.321 6.074 5.909 15.909-0.356 18.164-6.811 1.122-3.212 0.17-4.622-0.525-7.519-0.724-3.018 0.098-6.862 1.805-9.285-0.303 3.978 1.794 2.482 3.299 0.077 1.645-2.625 3.093-5.062 5.337-7.238 2.502-2.427 2.521-2.833-0.788-4.998-1.84-1.206-6.555-1.997-6.033-4.555-1.053 0.875-2.509 1.154-3.766 1.264 0.155-0.203 0.313-0.406 0.471-0.609-1.732 0.3-3.672 3.209-5.599 4.167-1.64 0.813-3.376 1.465-5.008 2.304-2.361 1.215-6.102 3.518-1.126 4.265 0.032 0.324 0.06 0.634 0.106 0.958 5.979-1.176 2.688 12.12 5.231 13.971 0.177-0.618 0.893-1.319 1.063-1.737 3.622 7.034-1.282 15.527-9.037 14.656 1.312-0.336 2.536-1.035 3.672-1.732-4.231 0.081-7.363 0.437-11.359-2.219-1.668-1.109-5.157-7.893-7.146-4.648"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#dcc06d'
          }
        />
        <path
          data-bone="pelvic girdle"
          d="m177.52 410.29c4.895 1.657 11.114-1.297 15.348-3.818-0.403 0.434-0.623 1.147-1.009 1.602 0.849-0.082 1.869 0.187 2.727 0.116-3.687 8.59-17.054 11.74-23.819 5.633 1.621 0.485 3.588 0.631 5.134 0.132-4.64-1.803-7.967-7.882-9.52-12.585-1.003 0.634-1.449 1.859-1.893 3.105-0.84-2.882 1.122-8.059-0.342-10.643-0.776-1.371-1.485-0.542-2.449-1.434-0.804-0.744-1.134-1.67-1.824-2.574-2.33-3.046-5.09-5.275-8.117-7.444-3.366-2.414-2.897-5.567-0.419-8.938 2.418 1.282 5.989 1.824 8.659 0.979 1.435-0.455 2.75-1.749 4.23-1.974 3.14-0.477 7.473 3.221 9.913 4.935 3.952 2.773 2.7 4.085 0.439 7.965-4.474 7.674-8.311 21.134 2.942 24.943z"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#dcc06d'
          }
        />
        <path
          data-bone="pelvic girdle"
          d="m160.21 389.16c-1.7-2.983-2.025-18.452-9.164-15.719-2.658 1.018-2.919 4.284-2.358 6.693 0.772 3.312 2.499 3.494 4.651 5.356-2.3-1.991-2.951-5.866 1.184-4.27 2.65 1.024 4.375 5.638 5.687 7.94z"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#ccb25c'
          }
        />
        <path
          data-bone="pelvic girdle"
          d="m236.1 387.4c0.396-5.067 9.067-6.824 7.84-0.457 1.878-2.278 6.379-5.111 5.317-8.84-1.259-4.42-7.512-3.059-9.942-1.011-2.902 2.449-5.21 8.214-3.879 12.023 1.468 4.204 4.979 3.149 6.355-0.133-3.142 1.076-4.531-1.232-4.619-4.086"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#ccb25c'
          }
        />
        <path
          data-bone="pelvic girdle"
          d="m210.35 410.64c2.41 1.552 5.78 2.702 8.552 3.424-2.198-1.468-6.697-3.761-6.488-6.971-0.648 1.064-1.414 2.638-2.064 3.906"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#ccb25c'
          }
        />
        <path
          data-bone="pelvic girdle"
          d="m181.03 414.93c3.431 1.331 9.133-1.399 10.594-4.748-0.787-0.759-1.61-1.321-2.665-1.274-0.705 3.192-5.276 5.497-8.286 5.665"
          fill={
            zoomIn && bone && bone !== 'pelvic girdle'
              ? '#36454f'
              : '#ccb25c'
          }
        />
      </g>
    </g>
  );
};

export default Ischium;
