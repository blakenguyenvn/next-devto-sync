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

interface TagsProps {
  tags: Array<string>;
}

const TagLinks = (tags) => {
  return (tags.map((tagName) => (
    <Tag key={tagName} tagName={tagName} />
  )));
};

export function Tags({ tags }: TagsProps) {
  console.log("tags: \n", tags);

  return (tags.map((tagName) => (
    <Tag key={tagName} tagName={tagName} />
  )));;
}