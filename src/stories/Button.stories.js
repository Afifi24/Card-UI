import Button from "../components/Buttons/Button";

export default {
    title:'Button',
    component:Button,
}

export const Default = () => {
    const sizeOptions = ["small", "medium", "large", "extraLarge"];
    const variantOptions = ["primary", "secondary", "outlined"];
  
    const size = select("Size", sizeOptions, "medium");
    const variant = select("Variant", variantOptions, "primary");
    const label = text("Label", "Click me");
  
    return <Button size={size} variant={variant}>{label}</Button>;
  };
