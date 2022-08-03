import classNames from "classnames"

export const IconFont = ({ className, extraClassName = "", ...props }) => {
  return (
    <svg
      className={classNames("icon", className, extraClassName)}
      aria-hidden="true"
      {...props}
    >
      <use xlinkHref={`#${className}`}></use>
    </svg>
  )
}
