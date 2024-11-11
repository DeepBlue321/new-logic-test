import { Button } from './ui/button'

const ButtonIcon = ({
  icon: Icon,
  onClick,
  variant = 'ghost',
  disabled = false,
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      className="flex items-center"
      size={'icon'}
    >
      {children}
      {Icon && <Icon className="mr-2 h-5 w-5" aria-hidden="true" />}
    </Button>
  )
}

export default ButtonIcon
