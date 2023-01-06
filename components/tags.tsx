interface TagProps {
  tagName: string;
}

export function Tag({ tagName = '' }: TagProps) {
  return (
    <>
      <a
        className={"crayons-tag"}
        href={`/t/${tagName}`}
      >
        <span class="crayons-tag__prefix">#</span>{tagName}
      </a>
    </>
  )
}

interface TagProps {
  links: Array<string>;
}

export function Tags({ tags }: TagsProps) {
  console.log(`tags \n`, tags);
  const TagLinks = (tags?.map((tagName) => (
    <Tag key={tagName} tagName={tagName} />
  )))
  return (<TagLinks />);
}

// (tags?.map((tagName) => (
//   <Tag key={tagName} tagName={tagName} />
// )))
