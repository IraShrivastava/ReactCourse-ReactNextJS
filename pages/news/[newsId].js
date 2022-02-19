import { useRouter } from 'next/router'

//domain.com/news/news-detail

function NewsDetailPage() {

    const router = useRouter()

    const newsId = router.query.newsId;

    return <h1>The News Detail Page</h1>
}

export default NewsDetailPage