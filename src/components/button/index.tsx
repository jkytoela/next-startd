import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
}

const Button = ({ primary, children, ...rest }: IButton) => {
  const baseStyle = `py-2 px-4 font-medium text-md border rounded`;
  const styles = primary
    ? `bg-blue-500 text-white border-blue-500 hover:bg-blue-600`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
