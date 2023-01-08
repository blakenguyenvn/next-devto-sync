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
        <span className="crayons-tag__prefix">#</span>{tagName}
      </a>
    </>
  )
}

interface TagsProps {
  tags: Array<string>;
}

export function Tags({ tags }: TagsProps) {
  const tagsContent = tags?.map((tagName) => (
    <Tag key={tagName} tagName={tagName} />
  ));

  return (
    <>
      {tagsContent}
    </>
  );
}