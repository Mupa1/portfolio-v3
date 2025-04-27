interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const ExternalLink = ({ href, children, ...props }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;
