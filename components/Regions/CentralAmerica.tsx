import { RegionProps } from '../WorldMap';

const CentralAmerica = ({
  handleZoom,
  className,
  zoomIn,
  countryId,
  answers,
}: RegionProps) => {
  return (
    <g
      id="centralAmerica"
      className={className}
      onClick={(e) => handleZoom(e, '')}
      opacity={zoomIn && zoomIn !== 'centralAmerica' ? '0.3' : '1'}
    >
      <g id="g3297" fill-opacity="1">
        <path
          d="m223.78 258.62-.03-.17.03-.16.13-.09.06-.11.36-.26.11-.04.18.07.02-.1.12-.2.16-.13.27-.07-.04-.16-.12-.1.05-.05-.03-.1.04-.06.12.05.1-.09.1.03.09-.07.11.07.34.09.19.08.1-.12.07.16.14.06.02.1.12.11.03.11.09-.04.1.04.11.22h.24l-.01.1.15.12h.12l.36.09-.03.15.04.13.13-.01.37-.1.11-.08.02-.14h.28l.09.04.03.09.12.13.25.04.13-.04.1-.05.1.1.18.12.02.07-.11.28v.18l-.08.21.02.06.13.03-.03.15-.19.08-.06-.08-.09.19.22.14-.03.12-.28.15-.04.12-.34-.04-.36.02-.22-.03-.1-.05-.11.06-.13-.03.06-.1h-.15l-.14-.06-.06-.08-.09.04.15.15-.64-.1-.7-.33-.3-.18-.16-.07-.34-.07h-.34l-.39-.1-.31.02-.08-.18-.28-.16z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="El Salvador"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3297'
                ? '#36454f'
                : '#fbb34a',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['El Salvador'] ?? 0) < 1 ? 'none' : '',
          }}
          transform="matrix(1.00944 -.22641 .2442 .93588 0 0)"
          id="El_Salvador_label"
          y="315.406"
          x="133.387"
          fontSize="1.204"
          strokeWidth=".096"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          font-weight="400"
        >
          <tspan
            y="315.406"
            x="133.387"
            id="tspan146"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.003"
            font-family="Arial"
            fill="#000"
            fill-opacity="1"
            strokeWidth=".096"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            EL SALVADOR
          </tspan>
        </text>
      </g>
      <g id="g3312" fill-opacity="1">
        <path
          d="m226.72 253.12-.09.03-.22-.06h-.34l-.15.03v-.16l.07-.58.07-.79.09-1.4v-.72l-.04-1.27v-.22l.07-.17.22-.08.41.28.07-.1.14-.11.05-.14.11-.07.1-.24v-.08l.2-.15.02-.12.12-.18.06-.22.1-.12.07.03.12-.05.28.03v.12l-.2.13.04.08.12-.06.07.06.08-.02.16.05.22-.09.04.12.02.31-.02.22-.15.39-.05.03-.1.2.03.07-.04.21-.07.22-.07.1-.03.18.26.22-.13-.01-.04.07-.1.33-.03.42.04.22.08.03.07.14.02.15-.13.11-.04.08.06.12-.11.18.02.13-.02.18-.08.04-.15.22v.1l-.13.3-.2.22-.01.1-.15.01-.15-.05-.02.08-.2.06v.2l-.12.07-.05.08-.11.1-.18.18zm2.72-4.22.1.08-.06.14-.1.11-.02-.14.09.02.04-.08zm-.83-.36.19-.11v.06l-.14.08zm.6-.88v.11l-.11.02.07-.24.07-.22.1-.04.04.1-.05.06z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Belize"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3312'
                ? '#36454f'
                : '#076bb3',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Belize'] ?? 0) < 1 ? 'none' : '',
          }}
          id="Belize_label"
          y="258.332"
          x="221.327"
          fontSize="1.589"
          strokeWidth=".135"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            y="258.332"
            x="221.327"
            id="tspan72"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.648"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".135"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            BELIZE
          </tspan>
        </text>
      </g>
      <g id="g3250" fill-opacity="1" stroke-opacity="1">
        <path
          d="m296.18 266.27-.08.05v.14l.04.23-.06.06.03.25.08.14.09.06-.08.08-.02.13v.28h-.1l-.15.1-.22.05-.16-.02-.21.03h-.51l-.22.04-.18-.07h-.28l-.13.1h-.1l-.02-.07.2-.07.11-.1.2-.06.19-.11.06-.1.26.02.11-.16-.06-.32.04-.12.02-.2-.02-.09-.15-.17-.1-.05-.2-.01-.04-.06.16-.1.51-.05.08-.09.47.01.06-.04.19-.03.32-.05.1.02-.1.2zm1.16-1.64v.22l-.13.02-.15.13h-.09l-.19.08-.1.08-.12-.06.13-.13.32-.22z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Trinidad and Tobago"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3250'
                ? '#36454f'
                : '#e1021a',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display:
              (answers['Trinidad and Tobago'] ?? 0) < 1 ? 'none' : '',
            lineHeight: '100',
            textAlign: 'center',
            // display: 'none',
          }}
          id="Trinidad_and_Tobago_label"
          y="272.65"
          x="289.315"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          fontSize="2.099"
          font-family="Arial"
          letter-spacing="0"
          word-spacing="0"
          writing-mode="lr-tb"
          text-anchor="middle"
          stroke="none"
          strokeWidth=".125"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            style={{
              textAlign: 'center',
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            y="280.65"
            x="289.315"
            id="tspan4344"
            text-anchor="middle"
            strokeWidth=".125"
            fill="#000"
            fill-opacity="1"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            TRINIDAD
          </tspan>
          <tspan
            style={{
              textAlign: 'center',
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            id="tspan4348"
            y="282.749"
            x="289.315"
            text-anchor="middle"
            strokeWidth=".125"
            fill="#000"
            fill-opacity="1"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            AND TOBAGO
          </tspan>
        </text>
      </g>
      <g id="g3256" fill-opacity="1" stroke-opacity="1">
        <path
          d="m279.13 247.44.02.04-.07.11-.14-.07.03-.08zm6.24 0-.02-.03-.28.07h-.25l.07-.07.15-.08.2-.04.22.1zm.17-.43-.15-.15.2.04zm-.88 0 .1.12-.37.13-.13.18-.1.22-.14.1-.13.05-.16-.02-.25.04-.14.08-.33-.05-.09-.06-.22.05-.13-.11-.22.05-.08.03-.13-.03h-.12l-.19-.03-.12.07-.27.02-.06.06-.1-.1-.2-.01-.11.05-.25-.03.02-.18.05-.1v-.17l.09-.17-.11-.22-.12-.03-.07-.15.28-.16-.03-.16.05-.06.11-.04h.15l.09.05.25.05.26-.03.13.03.28-.03.13.03h.2l.1.03.22-.05.19.07.11-.04.34.1v-.08l.27.07.05-.04.36.07.08.06h.11l.27.12.1-.05z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Puerto Rico"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3256'
                ? '#36454f'
                : '#150fff',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Puerto Rico'] ?? 0) < 1 ? 'none' : '',
            lineHeight: '100',
            textAlign: 'center',
            // display: 'none',
          }}
          id="Puerto_Rico_label"
          y="259.66"
          x="276.808"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          fontSize="2.34"
          font-family="Arial"
          letter-spacing="0"
          word-spacing="0"
          writing-mode="lr-tb"
          text-anchor="middle"
          stroke="none"
          strokeWidth=".135"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            style={{
              textAlign: 'center',
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            y="259.66"
            x="276.808"
            id="tspan4350"
            text-anchor="middle"
            strokeWidth=".135"
            fill-opacity="1"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            PUERTO
          </tspan>
          <tspan
            style={{
              textAlign: 'center',
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            id="tspan4354"
            y="262"
            x="276.808"
            text-anchor="middle"
            strokeWidth=".135"
            fill-opacity="1"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            RICO
          </tspan>
        </text>
      </g>
      <g id="g3267" fill-opacity="1">
        <path
          d="m269.42 243.32.03.29.07.16.03.31-.08.16-.1.07.06.1.09.1.19.1-.01.16-.05.09-.1.09-.2.22-.16.04.15.07.13.18.04.25-.06.19-.12.08-.11.16-.12.03-.18-.03-.09.02-.02.07.23.22v.17l.12.04.08.1.3.16-.14.24-.03.12.04.22-.04.13-.22-.25-.16-.12-.36-.14-.29.03h-.63l-.19.04-.13.09-.1-.02-.35.02-.13.07h-.2l-.24-.08-.35-.03-.1-.05-.34-.06-.15.02-.04-.08h-.2l-.15.05-.11-.04-.05.09h-.1l-.09-.1-.2.17-.18.07-.09.12.11.1-.02.13h-.16l-.07-.07-.16-.22-.11-.11-.23-.17-.19-.07-.01-.04-.21-.06-.16.07-.15-.06-.13-.09-.05-.13-.06-.08.09-.12.05-.2.01-.14.12-.08.31-.09.24.03.33.15h.14l.18.09h.1l.12.07h.17l.09-.08.21-.05.04.12-.17-.03v.12l.17.03.2-.07.4.04.2.06h.29l.18.08.28-.04.2.05.37.06.16-.08.15-.25h.08l.42.03.19.04.02-.11v-.18l.04-.08-.14-.1-.12-.01-.15-.14-.15-.04-.17-.27-.22-.15-.26-.27v-.06l.24-.07v-.09l-.11-.07-.12-.18.1-.13.1-.1-.1-.04.04-.1h.08l-.01-.12-.23-.2-.5-.25-.26-.08-.07.03-.18-.08-.16.06-.31-.03-.11-.1-.03-.13.1-.13.2-.15.31-.13.14-.14.06.05.17.02h.24l.09-.04h.1l.15-.04h.16l.26.06.26.11.05.07.14.07.04-.03.2.07.16.15.18-.03.2.05.1-.01.1.05h.07l.1.07.15-.09.26.05zm-5.07 2.8.05-.04.15.04v.06l-.14.03zm2.35-3.78h.11l.34.15.03.11-.2-.03-.27-.08h-.09l-.2-.08zm-1.02 3.13-.1-.12.13-.11h.12l.33.14.18.06.36.16.08.09.02.19-.57-.12-.22-.12-.23-.07z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Haiti"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3267'
                ? '#36454f'
                : '#bd517e',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Haiti'] ?? 0) < 1 ? 'none' : '',
          }}
          id="Haiti_label"
          y="259.968"
          x="250.617"
          fontSize="1.647"
          strokeWidth=".135"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            y="259.968"
            x="250.617"
            id="tspan141"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.754"
            font-family="Arial"
            fill="#000"
            fill-opacity="1"
            strokeWidth=".135"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            HAITI
          </tspan>
        </text>
      </g>
      <g id="g3262" fill-opacity="1" stroke-opacity="1">
        <path
          d="m269.42 243.32.03-.11-.07-.08.07-.08.22-.11.02-.1.36-.04.12.04.24.1h.13l.1.05h.14l.06-.05.2-.03.06-.1.2-.08.13.07.29.02.11.13.23.14.18.08.25.02.12-.06.1.02.23.26.1.04.42.1.09-.03.13-.11h.24l.12.11.03.11-.04.15.07.07.02.2.16.26.17.1.14-.04h.17l.17-.09.15.03h.1l.27.09.06-.1.12-.06h.09l-.06.14.22.04-.1.18-.13.08-.2-.04-.22.02-.13-.06-.33-.04-.04.05-.02.22.05.08.25-.02.11.04.11-.06.08.04.08.11.45.12.09-.12.09.12.16.05.15-.11h.15l.11.08.2.03.14.06.28.26.11.13.3.2.12.12.14.07.07.12-.01.1-.28.4-.03.16-.15.02-.15-.08-.2.44-.21.01-.12-.22-.15-.22-.18-.1h-.11l-.12.04h-.18l-.24-.06-.13-.07-.24.05-.34.02-.14.03-.19-.1-.05.08h-.11l-.08-.1-.38-.03h-.08l-.34.15-.09.12-.03.09-.23.22-.18.06-.09-.05h-.32l-.16.08-.22.01v-.11l-.1-.08.04-.09v-.16l-.07-.1-.13-.05h-.12l-.02.13-.12.1h-.23l-.05.1-.15.12-.29-.13-.09.01-.04.16.04.07.06.19-.1.18-.22.33-.04.08-.11.1-.05.07-.1.08-.14.35-.13.19-.07-.06-.17-.28-.13-.08-.2.03-.08-.03.11-.12-.07-.21v-.15l-.14-.17-.14-.04.04-.13-.04-.22.03-.11.13-.25-.3-.16-.07-.1-.13-.04v-.16l-.23-.22.03-.08.1-.02.19.03.09-.03.1-.16.14-.08.06-.2-.04-.25-.13-.17-.15-.07.16-.05.18-.23.12-.09.05-.09.01-.14-.2-.1-.08-.1-.06-.1.12-.07.06-.16-.03-.31-.07-.17zm.57 5.58-.03-.08.04-.11.1.1zm7.12-1.6h.17l.06.13-.2-.03-.11.04-.16-.08.01-.14.11.06z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Dominican Republic"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3262'
                ? '#36454f'
                : '#103f66',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display:
              (answers['Dominican Republic'] ?? 0) < 1 ? 'none' : '',
            lineHeight: '100',
            textAlign: 'center',
          }}
          id="Dominican_Republic_label"
          y="248.895"
          x="267.362"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          fontSize="2.33"
          font-family="Arial"
          letter-spacing="0"
          word-spacing="0"
          writing-mode="lr-tb"
          text-anchor="middle"
          stroke="none"
          strokeWidth=".135"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            y="248.895"
            x="267.362"
            id="tspan4384"
            strokeWidth=".135"
            fill-opacity="1"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            DOMINICAN
          </tspan>
          <tspan
            id="tspan4388"
            y="251.226"
            x="267.362"
            strokeWidth=".135"
            fill-opacity="1"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            REPUBLIC
          </tspan>
        </text>
      </g>
      <g id="g3292" fill-opacity="1">
        <path
          d="m234.72 265.3-.2-.07-.1-.2-.26-.3-.17-.09-.12-.13-.3-.22-.02-.1-.18-.1-.23-.12-.1-.15-.3-.22-.1-.21-.13-.1-.1-.2-.14-.15-.1-.17-.08-.22-.1-.1-.51-.32-.17-.11-.12-.2-.14-.05-.1-.11-.32-.23-.27-.31-.18-.16-.3-.17-.1-.1.05-.18.15-.1.06-.09.1.01.18.18v.07l.1.08.1.02.05-.1.14-.07.57-.03.1.03.16-.1.07-.1.07-.25-.02-.05.06-.15.1-.1.12-.03.15.08.1-.06.04-.08-.09-.2.04-.11-.08-.3v-.17l-.05-.08.02-.23.1-.05h.16l.3-.05.12.07.11-.03.1.05h.13l.1-.07.09-.17.15-.17.1-.14.07-.04.14-.16.19-.02-.03.14.29.23h.13l.1.16.23.03.02-.08-.06-.06.05-.2.06.01.27-.18.16-.04.05-.11.2-.1.09-.2.18-.17.1-.05.23-.03.07-.07-.03-.11-.08-.07.13-.2.04-.23.12.08.15-.11.02-.11-.03-.1.07-.17.25-.2.21-.03.12.06.18.34.09-.03.15.05.18.01.11.11.2-.09.1-.17.06.12h.13l.06-.07v-.11l.07-.03.14.1.21-.07-.07-.12.25.08h.25l.13-.04.36-.2.03-.06.16-.03.08.04.03-.09.2-.11.04-.16.11.08.11-.03.07-.1.33.12.32-.02-.12.02-.27.36-.06-.17-.14.08-.12.13.07.16.11.09.12-.1.13.63.12.35v.19l-.06.15-.33.5-.11.1-.09.14-.16.57-.05.28v.23l-.12.3-.02.33.02.14.14.83-.08.67v.15l.07.16.07.1-.02.18-.31.07.03-.1-.08-.16.03-.23.09.02.06-.08.05-.52-.18-.05-.07.08.11.23.03.16-.22.16-.22.05-.02.17h.1l.03.15-.03.14.07.07.16-.06.06.04-.11.22-.06.3.01.33-.08-.1-.13.01.03.11-.02.14-.19.19.13.15.07.02.06-.13h.09l.11.48v.13l-.15.1-.12.05-.08.28h-.07l-.1.17v.25l.06.34.06.12.15.28.27.14-.07.01.03.3-.1.04-.33.1-.07.07h-.18l-.22-.17-.14.06-.14-.06h-.14l-.09-.08.05-.11-.15-.1-.1-.04-.12-.19-.16.1-.11-.03-.06-.08-.22-.09h-.11l-.14-.09-.08.01-.45.3-.1.02-1.43-.54-.23-.15-.09.05zm7.3-8.41h.1l-.01.11-.14-.03z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Nicaragua"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3292'
                ? '#36454f'
                : '#2fc2f4',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Nicaragua'] ?? 0) < 1 ? 'none' : '',
          }}
          transform="matrix(.99832 -.2654 .28626 .92558 0 0)"
          id="Nicaragua_label"
          y="325.745"
          x="124.9"
          fontSize="1.704"
          letter-spacing="-.221"
          strokeWidth=".144"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          font-weight="400"
        >
          <tspan
            y="325.745"
            x="124.9"
            id="tspan176"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.831"
            font-family="Arial"
            letter-spacing="-.221"
            fill-opacity="1"
            strokeWidth=".144"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            NICARAGUA
          </tspan>
        </text>
      </g>
      <g id="g3282" fill-opacity="1">
        <path
          d="m242.5 269.1.27.2.15.15.14.09-.06.11.06.12-.1.05.1.2.1.06.07-.05.07.06.11-.08.1.07-.02.1-.18-.07-.03.07.05.17v.15l.06.06h.19l.09.15h.09l.18-.04.1.05.13-.12.27.12.06-.07v-.11l-.18-.1-.08-.12.28.06.12.08.22.34.22.22.45.06h.14l.54-.06.5-.2h.15l.24-.27.23-.14.31-.14.25-.08.3-.02.14-.08.18-.04.14-.06.25-.25.06-.11h.09v.11l.09.02.03-.11.2-.09.1-.11.1-.05.12-.1.05-.23.1-.06.18-.04.05.1.17.04.09-.04.22.03.25.07.11.02.1-.04.45-.05-.06.09-.14.01v.2h.19l.13.03.06.05h.12l.18-.05h.16l.28.06.11-.05.11.05.2.04.14.1.1.02.33.16.17.03.06.07.23.07.05.09.08.02.2.26.07-.08.14.18.15.18-.02.04.08.14.22.19.14.06.08.2.17.1.25.02-.15.09v.09l-.1.17v.14l.13.04.08.15.02.17.05.14.1.02.22.41.08.3.08.06-.25.1-.13.08-.15.27.11.17-.07.07-.35.22-.18.16-.08-.02-.03-.13-.14-.2-.14-.12-.08.11.03.2.07.15-.07.11-.16.02-.19.6-.12-.07-.17-.19v-.1l-.13-.1-.2-.18-.06-.16-.17-.22-.14-.12.04-.07-.13-.3-.16-.19-.1-.32v-.08h.2l.08.04.09-.04.12-.2-.01-.07-.16-.17.21-.04.1-.07v-.1l.06-.14.1.1.17.08-.04-.2-.08-.02-.11-.14-.1.06-.02.09-.12.06v-.12l-.05-.05h-.1l-.16.06v.08l-.06.15-.16-.15-.1-.2v-.12l-.03-.28-.27-.1-.17-.18-.11-.04-.08-.18-.06-.03-.11.08-.08-.07-.04-.12-.33-.18-.19-.07-.22-.06-.25-.02h-.28l-.25.06-.1.13-.19.14-.26.06-.12.17v.28l-.1.06.05.2-.22.07-.02.08-.15.08-.1.1-.27.2-.36.17h-.19l-.09.03-.11-.05-.23.22v.29l.04.18.27.11.12.27.4.33.22.29.1.2.04.13-.05.1-.12.03-.19.07-.28-.01-.2.06-.07.05.03.17h-.08l-.16.18-.08-.03-.3.04-.3.05-.39.02-.14-.12.09-.18v-.1l-.07-.05.02-.16-.13-.14.05-.1-.06-.12-.11-.12-.07-.17.04-.08-.12-.05-.02-.07.09-.07-.03-.07-.19.02-.1.05v.14l-.11.1.07.06v.16l-.06.08-.16-.1-.29-.07-.06.01-.07-.09h-.2l-.1-.13-.04-.12.05-.1-.14-.11.03-.24-.08.04-.07-.1-.1-.3-.1-.06-.06.08-.27-.12-.22-.05-.1-.07-.12.02-.12-.05-.08.18-.08-.12h-.05l-.06-.17-.15-.08v-.1l-.31.14-.11-.09-.01.11-.15.02-.37-.12h-.2l-.17.07-.14.1-.03.1v.2l.07.16-.11.1.02-.18-.14-.29v-.08l-.15-.04-.13-.11.25-.23.2-.09.06-.07.03-.16-.03-.25-.2-.28.12-.11.03-.13.26-.11.11-.1-.08-.14-.14-.05-.25-.2-.08.04v-.94l.01-.1.18-.03-.04-.19.12-.1.3.15.08.11.15.03.05-.15zm3.55 5.05.16-.05h.13l-.12.12zm-1.28.4h.11l.08.16-.16.04-.09-.05-.14-.02-.25-.2-.1-.23h.07l.06-.14.23-.17.09.22.08.11-.1.05-.01.1zm-1.37-2-.1.03-.14-.03.1-.08zm-.33-.15.03.06-.16.04-.07-.07.2-.1zm8.09-.12.03.08-.03.1-.12-.03.05-.14zm-7.52-2.55.07.06-.15.08-.02-.14zm-.52-.23.15-.06.09.17-.07.04zm8.54 2.4h.06l.09.29-.06.1h-.11l-.1.05-.07-.05.03-.11-.04-.25.17-.06z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Panama"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3282'
                ? '#36454f'
                : '#0fa89c',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Panama'] ?? 0) < 1 ? 'none' : '',
          }}
          transform="matrix(.97555 -.33027 .35623 .90446 0 0)"
          id="Panama_label"
          y="351.431"
          x="112.034"
          fontSize="1.762"
          strokeWidth=".144"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          font-weight="400"
        >
          <tspan
            y="351.431"
            x="112.034"
            id="tspan123"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.937"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".144"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            PANAMA
          </tspan>
        </text>
      </g>
      <g id="g3277" fill-opacity="1">
        <path
          id="Cuba"
          d="M261.11 242.84c-.04-.24 0-.52-.17-.23-.1.24-.44.31-.76.24-.33.1-.57-.24-.9-.18-.33.03-.64-.05-.97-.07-.46.1-.93.12-1.4.12-.28 0-.6.26-.92.1-.32-.04-.57.14-.89.14-.3.09-.8.04-.37-.3.24-.33.6-.6.98-.74.16-.13.58-.38.37-.67-.45-.1-.07-.36-.49-.51-.28-.02-.57.12-.83.04-.33-.03-.58-.12-.9-.02-.26-.07-.45-.32-.62-.45-.16-.26-.6-.25-.6-.6-.06-.4-.06-.5-.22-.88-.17-.26-.31-.6-.66-.47-.28.07-.6.12-.9.19-.3-.07-.57-.14-.87-.23-.24-.19-.57-.17-.82-.15-.02-.25-.42-.06-.6-.36-.32-.06-.5-.34-.75-.54.31-.28-.55-.54-.09-.13-.02.22-.54.01-.77.08-.34.09-.97.04-.89-.45-.3-.32.03.62-.31.24-.24.37-.37-.32-.73-.14-.27-.15-.59.21-.76-.12-.16-.2-.8-.26-.66-.48.37-.12.85.09 1.18-.17.1-.33-.4-.48-.67-.5-.35.11-.67-.05-1.02 0-.34-.08-.66.07-1-.07-.17.18-.4.42-.7.52-.25.18-.31.5-.67.49-.12.24-.5.54-.69.23-.12.12-.57.2-.86.16-.37.05-.03.76-.43.62a1.1 1.1 0 0 0-.85.37c-.47.27.15-.55-.39-.36-.31.03-.6.45-.91.18.08-.19.54-.17.8-.34.2-.28.66.03.75-.2-.16-.22-.38-.47-.13-.79.17-.26.36-.42.59-.6.3-.23.7-.42 1.09-.52.31-.07.5-.32.81-.25.15-.42.58-.1.55-.2.23-.22.5.05.75-.16.39-.03.8-.02 1.11-.31.3-.13.62-.07.93-.14.35.27.86-.01 1.23.19-.02.36.4-.1.67-.04.21.45.4.1.7.1.18.26.6-.1.9.04a1 1 0 0 0 .72.4c.3.2.6-.23.83.08.23.17.54.3.8.4.15.1.26.6.56.58.14.3.47.4.76.4.27-.06.69-.1.93.03.1.2.5-.06.7.27.33 0 .45.36.82.33.23.11.4.39.63.58.19.06.4.34.72.34.46-.03.33.2.65.38.01-.27-.3-.42-.51-.57-.18-.43.27.15.47.2.18.17.77.29.56.59-.13-.22-.8-.13-.27-.04-.11.45.36.13.45-.07.13.25.53.42.64.57-.38.37.03-.12.27.04.32.17-.14.3.35.2.13.48.14.05.28 0 .3 0 .62.2.82.38.04.21.49.08.68.08.26-.1.61.08.68.3-.05.33-.63.28-.17.31.44.2-.02.11-.29.1-.18.52.3.2.41.28.23.19.51-.16.72.17.14-.34.55.06.84-.06.32.1.58.2.8.44.24.19.38.47.68.56.25-.08.84.05.51.37-.18.33-.52.15-.85.27-.3.09-.67-.1-.91.18-.23 0-.24.25-.52.23zm-8.06-1.7c.07.26-.36-.18 0 0zm-.25-.45c-.25.2-.36-.02 0 0zm7.26-.18c.31.3-.47-.03 0 0zm-8.85-.31c-.32.03-.25-.39 0 0zm-5.72-2.06c-.38.35-.39.16 0 0zm-2.98.18c.16.3-.42.35-.62.49-.32.07-.77 0-.87-.37-.01.02.73.24.38-.2-.3-.25-.1-.56.08-.71.15.01.77-.02.73.3.33.15.11.36.3.49zm12.28-1.09c.12.46-.53.26-.53.04-.4.12-.11-.33.18-.08.12-.08.22.09.35.04zm-.9-.24c-.33-.34.46-.21.4.02-.15.28-.16-.14-.4-.02zm-.5-.47c-.37-.26.3-.41.32-.03.15.35-.01.06-.32.03zm-.56-.35c-.2.14-.89-.25-.47-.23.26.19.6-.2.73.15.3.11-.42.3-.26.08zm-4.72-1.37c.26-.24.35.24 0 0zm-4.14 3.49c-.02.23-.41.2-.01.02z"
          fill="#d1dbdd"
          stroke="#000"
          stroke-opacity="1"
          strokeWidth=".15"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3277'
                ? '#36454f'
                : '#4f8400',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Cuba'] ?? 0) < 1 ? 'none' : '',
          }}
          id="Cuba_label"
          y="252.054"
          x="229.068"
          fontSize="2.802"
          strokeWidth=".231"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            y="252.054"
            x="229.068"
            id="tspan91"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="4.68"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".231"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            CUBA
          </tspan>
        </text>
      </g>
      <g id="g3272" fill-opacity="1">
        <path
          d="m258.2 247.7.07.15.12.1-.3.1-.05-.04-.08.08-.14-.05-.27.05-.22-.04-.1-.14-.23-.1h-.13l-.12-.06-.1.1-.06.23-.11.08-.15-.07-.07-.07-.12-.04-.11.05-.15.3h.14l.02.14-.2-.01-.27-.25-.18-.11-.11-.02-.16.05-.21-.04-.34.01-.16-.08-.07-.13-.06-.04v-.17l-.28-.03-.08-.17-.1-.04-.06-.18-.07-.04-.33-.02-.04.04-.29-.08-.08-.12.07-.06.03-.2.07-.02.2-.18.08-.02.24.02h.22l.07.02.12-.16.08-.05h.21l.37.07h.25l.28.05.11.04.08-.02.26.02.27.08.07.04h.22l.1.03.28-.03v.1l.2.1.04.12.09.03.2.05.14.08h.07l.12.05h.18l.04.06.28.07v.05l.14.15z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Jamaica"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3272'
                ? '#36454f'
                : '#e3f97d',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Jamaica'] ?? 0) < 1 ? 'none' : '',
          }}
          id="Jamaica_label"
          y="259.66"
          x="236.203"
          fontSize="1.387"
          strokeWidth=".116"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            y="259.66"
            x="236.203"
            id="tspan210"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.311"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".116"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            JAMAICA
          </tspan>
        </text>
      </g>
      <g id="g3307" fill-opacity="1">
        <path
          d="m225.61 256.88-.11-.07-.1.07-.1-.03-.1.1-.1-.06-.05.07.03.09-.05.05.1.11.06.15-.26.07-.18.13-.12.18v.11l-.2-.06-.11.04-.35.27-.07.11-.1.08-.05.16.03.17-.36-.15-.4-.18-.24-.09-.2-.04-.32-.05-.5.05h-.34l-.29-.04-.38-.08-.58-.25-.53-.3-.36-.28-.35-.31-.5-.35.1-.07.12-.24v-.1l-.08-.27.01-.08.08-.14v-.24l.14-.06.06-.15-.31-.41v-.14l1.12-1.91.07-.06 3.07-.01.1-.02-.03-.1.07-.14-.07-.05v-.17l.16-.23v-.18l-.2-.03v-.07l-.17-.08-.1.02-.16-.12.05-.17-.1-.14-.16-.25-.24-.15-.18-.05-.17-.12-.23-.1-.15-.28-.11-.02-.1-.09-.05-.11-.07-.05-.08-.16h-.2v-.06l-.15-.11h1.09v-1.4l.08-.04h4.49v2l-.07 1.38-.07.78-.05.6v.16l.13-.01h.34l.22.05.1-.04.11.09h.2l.41.27-.03.13.1-.01.11-.23-.01-.1.17-.03-.14-.1-.05-.07-.12-.07.02-.07.13.06.26.23.26.11.22.18.08.04-.03.06-.2.07-.1.14-.1.12-1.43 1.1-.34.12-.17.13-.03.12.04.1-.15.23v.08l.22.32-.05.1v.22l-.05.04-.16-.02-.19.23-.08.02z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Guatemala"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3307'
                ? '#36454f'
                : '#a6a9ac',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Guatemala'] ?? 0) < 1 ? 'none' : '',
          }}
          transform="matrix(1.00753 -.2336 .25195 .93411 0 0)"
          id="Guatemala_label"
          y="311.691"
          x="121.94"
          fontSize="1.743"
          strokeWidth=".144"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          font-weight="400"
        >
          <tspan
            y="311.691"
            x="121.94"
            id="tspan113"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="2.908"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".144"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            GUATEMALA
          </tspan>
        </text>
      </g>
      <g id="g3287" fill-opacity="1">
        <path
          d="m239.84 265.7.11.18.06.22.11.34.16.35.18.3.47.62.3.31h.15l.02.1.17.24.18.22.11.1.06-.02.03.15.06.08.17.05h.17l.15.16-.07.07-.04.15-.15-.03-.07-.11-.3-.15-.13.12.04.17-.18.04-.02.09.01.94.08-.03.25.19.14.05.08.14-.1.11-.27.1-.04.14-.1.1.19.28.03.26-.03.15-.06.07-.2.1-.25.22.13.1.14.05.01.08.14.3-.04.16v-.18l-.16-.29-.07-.06-.3-.22-.1-.09.14-.16v-.08l-.09-.1-.02-.1.04-.12-.15-.08h-.14l-.04-.07-.15-.04v-.1l-.16-.07-.1.06h-.14l.19.31.19.08.1.11.02.28-.02.07-.15-.04-.29-.13h-.28l-.09-.11-.22-.22-.1-.05v-.08l.1-.13.1-.03.08-.1-.04-.12.05-.1.09-.05v-.13l-.1-.11.06-.08-.06-.17-.07-.06-.18-.22-.1-.01-.05-.13-.13-.05-.2-.18-.22-.11-.23-.1h-.1l-.1-.16-.23-.12h-.11l-.34-.1-.17.02-.22-.15-.11-.11-.05-.17.11-.17v-.07l-.16-.21-.07-.03.04-.1-.13-.14-.23.02v-.06l-.1-.06-.14-.1-.16-.15-.2-.14-.2.02-.18-.14.02.26.11.1.12.2.23.07.1.06h.13l.1.05-.02.1.16.16-.11.07-.11.17-.27.16-.07.19-.07.08-.07-.14-.32-.43-.14-.1-.27-.1-.07.02-.42-.13-.07.01-.03-.13-.25-.32-.17-.38-.03-.15.05-.05-.06-.1.08-.15.13-.09-.08-.11.07-.14.05.04.15-.08.17-.15-.08-.14v-.26l-.04-.05-.16-.04-.05.02-.1-.11h-.06l-.2-.09.09-.15.33.02.11-.07-.12-.14.11-.14.17-.3.1-.03.22.15 1.42.53.11-.03.45-.28.08-.02.14.09h.1l.22.1.06.07.12.03.16-.11.11.2.11.05.15.1-.05.11.1.09.13-.02.14.06.14-.06.22.18h.18l.06-.08.34-.1.1-.05-.03-.29z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Costa Rica"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3287'
                ? '#36454f'
                : '#1272b3',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Costa Rica'] ?? 0) < 1 ? 'none' : '',
          }}
          transform="matrix(1.00973 -.22527 .24297 .93615 0 0)"
          id="Costa_Rica_label"
          y="327.661"
          x="139.252"
          fontSize="1.839"
          strokeWidth=".154"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          font-weight="400"
        >
          <tspan
            y="327.661"
            x="139.252"
            id="tspan126"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="3.052"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".154"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
          >
            COSTA RICA
          </tspan>
        </text>
      </g>
      <g id="g3302" fill-opacity="1">
        <path
          d="m225.61 256.88.02-.15.08-.03.2-.23.15.03.05-.04v-.22l.05-.1-.21-.32v-.09l.14-.22-.04-.11.03-.12.16-.1.33-.14 1.44-1.1.11-.12.1-.14.2-.07.03-.06.13.08h.13l.22-.24h.1l.14-.08.07-.11.14-.08.23-.01.09-.06.19.08h.06l.27.22.16.02.04-.06h.1l.1-.08.27.06.22.07.22.04.28.05h.18l.2-.05.07-.06.18.05.56-.04.15.07.2-.01.22-.15.1-.09.17-.05.35-.01.16-.1.07-.12-.03-.05-.16-.03v-.05l.41.08.27.06.24.18.3.1.32-.03h.27l.14-.07.3-.2h.18l.37.15.44.13v.21l.05.05.27-.03.18.02v-.07l-.25-.04-.16-.1.45.09.36.02.06.02.31.26.55.5-.2-.05-.16.12v.09l-.08.05.1.17.12.05.09.09.1.02.09.14.15-.01.1-.05-.22-.15-.2-.06-.1-.13.09-.05.22.1.06.08.14.05.13.12v.16l.12.04.05-.08.17-.05.04-.1.19.04.04.06v.12l-.18-.06-.05.09.11.09.12-.09.12-.04-.1-.2h-.07l-.16-.09-.15-.04-.13-.08.06-.07.06.06.34.16.34.12.1.1.09.21.11.2.07.06.31.12-.34.04-.3-.12-.07.09-.1.03-.13-.08-.05.17-.19.1-.03.1-.08-.05-.16.02-.03.07-.36.19-.13.03-.25.02-.25-.06.07.1-.22.08-.13-.12-.08.03v.1l-.05.1-.13-.01-.05-.12-.11.17-.2.08-.1-.11h-.19l-.15-.05-.1.03-.17-.34-.12-.06-.22.03-.24.2-.08.18.04.09-.02.1-.15.12-.12-.09-.04.24-.13.2.08.07.03.1-.08.08-.22.03-.1.05-.18.17-.1.2-.2.1-.04.1-.16.05-.27.18h-.06l-.05.18.06.07-.02.08-.23-.03-.1-.15h-.14l-.28-.23.03-.15-.2.02-.12.16-.09.04-.09.13-.15.18-.08.17-.12.06h-.12l-.1-.06-.11.04-.11-.06-.3.05h-.16l-.12.05v.23l.05.08-.01.16.08.3-.04.12.1.2-.03.07-.11.06-.15-.07-.11.03-.12.1-.06.15.02.04-.05.24-.1.11-.15.11-.1-.03-.56.03.04-.07-.14-.16-.03-.1h-.14l-.05-.2-.11-.2-.07-.04.17-.18.16-.03-.06-.1-.11-.03-.09.16h-.16l-.19-.17-.11.1-.13.07-.24-.11.19-.1.03-.15-.13-.02-.02-.06.08-.22v-.18l.1-.28-.01-.06-.17-.11-.12-.11-.09.05-.13.03-.25-.03-.1-.13-.05-.1-.1-.03h-.27v.14l-.13.08-.37.09-.13.02-.04-.13.03-.15-.35-.11h-.13l-.15-.1.02-.1h-.25l-.1-.23-.11-.03-.09.03-.05-.11-.1-.11-.02-.1-.14-.06-.06-.15-.11.12-.18-.08zm4.35 2.86-.02.09h-.09l-.03-.08zm-.02-.2.1.02-.02.13-.17-.06zm1.85-7.02v.06l-.2.1-.06-.08.1-.04zm.68-.4.02-.06.17-.11.22-.11h.2l-.23.11-.09.07-.15.03zm1.73-.45.06-.11.12.05-.06.08z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Honduras"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g3302'
                ? '#36454f'
                : '#00167f',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Honduras'] ?? 0) < 1 ? 'none' : '',
          }}
          transform="matrix(.99932 -.26217 .28278 .9265 0 0)"
          id="Honduras_label"
          y="316.522"
          x="137.736"
          fontSize="1.175"
          strokeWidth=".096"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          font-family="Arial"
          font-weight="400"
        >
          <tspan
            y="316.522"
            x="137.736"
            id="tspan174"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            fontSize="1.964"
            font-family="Arial"
            fill-opacity="1"
            strokeWidth=".096"
            style={{ fill: '#fff' }}
          >
            HONDURAS
          </tspan>
        </text>
      </g>
      <g id="g4237">
        <path
          d="m294.66 262.46.02.07-.03.26-.04.1-.16.1-.08-.04-.07-.18.07-.2.14-.17h.1z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Grenada"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4237'
                ? '#36454f'
                : '#2fc2f4',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4240">
        <path
          d="m295.76 260.1-.04.03-.22-.13v-.16l.07-.11.08-.2h.17l.05.16v.15l-.03.16z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Saint_Vincent_and_the_Grenadines"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4240'
                ? '#36454f'
                : '#0fa89c',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4243">
        <path
          d="M300.1 260.06v.1l-.2.16-.25-.06-.1-.2-.02-.33.1-.14.08.08.12.22z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Barbados"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4243'
                ? '#36454f'
                : '#901f5d',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4246">
        <path
          d="M296.46 257.91v.15l-.01.19v.1l-.04.15-.09.14-.25-.11-.08-.1v-.22l.04-.1.21-.33.1-.12.1.12z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Saint_Lucia"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4246'
                ? '#36454f'
                : '#e3f97d',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4252">
        <path
          d="m295.28 254.88-.02-.17-.05-.07-.08-.3-.12-.17-.04-.13.06-.1-.04-.05.02-.11h.08l.13.11.07-.02.12.06.12.17.03.27-.02.3-.07.1h-.08z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Dominica"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4252'
                ? '#36454f'
                : '#a6a9ac',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4249">
        <path
          d="m293.98 250.16-.02-.12.13-.07.03-.1h.08l.06.1.09-.02.05.11.12.03-.05.13-.1-.02v.09l-.11-.05-.2.04zm.11-1.39-.05-.02v-.21l.12-.05.14.1.07.15-.02.13-.08.03-.07-.08z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Antigua_and_Barbuda"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4249'
                ? '#36454f'
                : '#1272b3',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4255">
        <path
          d="m591.75 343.99-.04.26-.16.17.03.1-.13.13-.22.07-.2.03-.26-.04-.05.02-.15-.13.1-.08.03-.14v-.29l.07-.16.23-.15v-.1l.1-.2.16-.12.18.03.1.27.1.04-.01.09zm14.14-1.4-.02.1-.13.04-.12.08-.09-.12.14-.1.17-.03z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Mauritius"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4255'
                ? '#36454f'
                : '#00167f',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4231">
        <path
          d="M266.32 238.8h-.12l-.07-.14.22-.15.17.13.01.08zm-.34-2.37-.07-.04.09-.22.04.05h.12l.13.03.12.09.18-.03.18.06.17.09v.1l-.11.05-.2-.17h-.2l-.08-.04-.22.08zm-1.26 3.39.03-.1.2-.08.1-.15.2-.01.08-.1.14.17.22.08.23-.1.28-.41h.1v.1l-.06.35-.16.2-.07.23-.25.1h-.2l-.1-.03-.13.07-.22.04-.11-.05-.17-.01-.11.09-.07-.06-.02-.13-.05-.1.11-.05zm-1.59-4.2v.07l-.18.22-.05-.07zm.72.03.1-.1v-.06h.27l-.03.16.02.32-.04.15-.16.13-.08.15-.12.12-.3.1-.07.1-.08-.06.02-.08.18-.06.08-.07v-.1l.17-.04.06-.13.2-.06.08-.14-.03-.11-.07-.05h-.18l-.1-.08zm-.73-.19-.16-.23.1-.06.2.07.16.18h.17l.2.07-.17.16-.04-.08-.11.03-.2-.05zm1.55-.94-.22.04h-.12l-.04-.08.19.03.13-.03zm-5.3-1.18-.02.11-.15-.11-.03.03-.18-.15-.1-.04-.11-.14.12-.07.32.3zm2.33 1.46.03.03.03.26-.08-.08-.12-.18-.02-.11-.17-.17-.28-.05.07-.07-.14-.16v-.11l.05-.14-.05-.2-.17-.14v-.06l-.13-.15-.06-.24h-.09l.01-.1.17.1.12.18.02.18.08.09.14.28.05.34.11.14.21.08.1.07.15.16zm-.1-1.9.22-.03.08.05-.04.07-.1.06-.1-.06-.17.04v-.1zm1.07-.83-.06.16-.16.02.07-.15v-.23l.18-.11.07.15-.02.1zm-8.5-.44-.15.1.01-.12.18-.11zm-.1-.19-.06.08h-.1l-.04-.07.18-.05zm1 .87.01.18-.1.32-.1.02-.19-.07.08-.12.14-.05-.02-.07-.27.17-.1-.08.2-.11-.2-.01-.1.02-.08-.06-.05-.28v-.1l-.11-.13-.15-.07.08-.1.13-.08.04-.11.14-.04.04-.06.23-.15.1.17-.25.19-.03.09.12.1.13-.11.02-.18.08-.04.15.25.02.2-.01.12zm5.5-.76.06.2-.11-.04-.23.02-.14.07-.1-.1.14-.06.15-.14v-.1l-.2-.1-.12-.2-.1-.26-.1-.1h-.09v-.16l-.27-.2.11-.1.23.15.02.22.11.1.1.21.13.2.19.11.07.13zm-5.4-2.04-.15-.03-.05-.05.1-.09.17-.05h.32l.13.08-.27.1-.13-.03zm-2.16.88.05-.14.08.04v.14l-.09.11.04.05.12-.07.05.11h.05l.02-.25-.07-.1-.06.05-.07-.11.02-.14.22-.22.08-.16-.04-.08.08-.13-.03-.2-.11-.3.03-.05.13.02.15.11.11-.06.17.1-.04.1.06.08-.04.17.13.09.15.37.11.15.11.08.12.13-.04.26.07.17.01.1-.08.12-.13.02-.14.17-.11.09h-.15l-.1.09-.08.1-.06-.1-.05-.17-.13-.07v-.26l-.12.1h-.1l-.32-.16-.15-.14-.08-.11zm5.45-1.35.12.15-.05.31-.07.1.06.15-.02.18-.07.12v.3l-.06.04-.1-.25-.2-.11v-.08l.25.04.09-.1-.07-.14.06-.2.07-.07.03-.22-.05-.1-.24-.19-.2-.29-.16-.08-.2-.04-.12-.06-.14-.13-.3-.07-.14.07.05-.18.04-.2.14.02-.04.09.11.14.06.03.31.22.1.06.22.03.09.05.12.16.16.15zm-6.05-3.64-.15.12h-.18l-.1-.04-.17-.12-.26-.26.26.1.06.1.1-.02.14.03.2-.1.14-.23-.16-.05.08-.11.03-.15.1.08.04.12.26.1.04-.02.34.06.08-.08.12.05.09-.04.11.01.17-.05h.2l.11-.11.06.22-.06.11-.09-.04h-.19l-.5.1h-.13l-.61.15zm1.95-.98.09-.06.35.06.06-.04.24.14.46.42.14.23.23.07.3.19.03.07-.03.2.11.29-.18.03-.2.16-.02.07-.05.4v.4l-.09.1-.1-.12-.12-.18-.17-.03.1-.17.1-.03.08-.1.12-.07-.07-.16.06-.15-.05-.14.08-.11-.03-.25.08-.03.07-.15.02-.13-.14-.05-.23-.03-.11-.14.01-.07-.2-.06-.04-.16-.18-.26-.1-.05-.14.04-.2-.06h-.15z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Bahamas, The"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill:
              countryId && countryId !== 'g4231'
                ? '#36454f'
                : '#e1021a',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <text
          style={{
            display: (answers['Bahamas, The'] ?? 0) < 1 ? 'none' : '',
            lineHeight: '100',
            textAlign: 'center',
          }}
          id="Bahamas_label"
          y="236.895"
          x="239.362"
          font-style="normal"
          font-variant="normal"
          font-stretch="normal"
          fontSize="2.33"
          font-family="Arial"
          letter-spacing="0"
          word-spacing="0"
          writing-mode="lr-tb"
          text-anchor="middle"
          stroke="none"
          strokeWidth=".135"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          transform="scale(1.03856 .96288)"
          font-weight="400"
        >
          <tspan
            y="236.895"
            x="239.362"
            // id="tspan4384"
            strokeWidth=".135"
            fill-opacity="1"
            style={{
              fill: zoomIn === 'centralAmerica' ? '#fff' : '#000',
            }}
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-family="Arial"
          >
            The Bahamas
          </tspan>
        </text>
      </g>
    </g>
  );
};

export default CentralAmerica;
