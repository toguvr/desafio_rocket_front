import React from "react";

interface SvgProps {
  color?: string;
  type?: string;
  cursor?: string;
  width?: string;
  height?: string;
  onClick?(): void;
}

const SvgComponent = ({
  color,
  type,
  width,
  height,
  onClick,
  cursor = "default",
}: SvgProps) => {
  function svgToRender() {
    switch (type) {
      case "lupa":
        return (
          <svg
            onClick={onClick}
            cursor={cursor}
            width={width || "24"}
            height={height || "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.059"
              cy="11.0586"
              r="7.06194"
              stroke={color || "#737380"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.0034 20.0033L16.0518 16.0517"
              stroke={color || "#737380"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "loja":
        return (
          <svg
            width="24"
            height="24"
            onClick={onClick}
            cursor={cursor}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7"
              stroke={color || "#737380"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z"
              stroke={color || "#737380"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
              stroke={color || "#737380"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "voltar":
        return (
          <svg
            onClick={onClick}
            cursor={cursor}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604"
              stroke={color || "#617480"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13L7.5 10.5L10 8"
              stroke={color || "#617480"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 16H12.75C14.269 16 15.5 14.769 15.5 13.25V13.25C15.5 11.731 14.269 10.5 12.75 10.5H11.5H7.5"
              stroke={color || "#617480"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "lixo":
        return (
          <svg
            onClick={onClick}
            cursor={cursor}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1378 21H7.85782C6.81082 21 5.94082 20.192 5.86282 19.147L4.96582 7H18.9998L18.1328 19.142C18.0578 20.189 17.1868 21 16.1378 21V21Z"
              stroke="#DE3838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11V17"
              stroke="#DE3838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7H20"
              stroke="#DE3838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 7L15.987 4.298C15.694 3.517 14.948 3 14.114 3H9.886C9.052 3 8.306 3.517 8.013 4.298L7 7"
              stroke="#DE3838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4298 11L14.9998 17"
              stroke="#DE3838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.57016 11L9.00016 17"
              stroke="#DE3838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      default:
        return (
          <svg
            onClick={onClick}
            cursor={cursor}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604"
              stroke={color || "#617480"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13L7.5 10.5L10 8"
              stroke={color || "#617480"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 16H12.75C14.269 16 15.5 14.769 15.5 13.25V13.25C15.5 11.731 14.269 10.5 12.75 10.5H11.5H7.5"
              stroke={color || "#617480"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  }

  return svgToRender();
};

export default SvgComponent;
