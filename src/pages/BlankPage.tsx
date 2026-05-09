type BlankPageProps = {
  pageId: string;
};

function BlankPage({ pageId }: BlankPageProps) {
  return <main className="blank-page" data-page={pageId} />;
}

export default BlankPage;
