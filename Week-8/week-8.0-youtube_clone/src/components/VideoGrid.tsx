import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    thumbnail: "/t1.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t2.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "100xDevs",
    views: "90M views",
    timestamp: "4 hours ago"
}, {
    thumbnail: "/t3.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t4.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t5.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t6.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t5.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t1.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t2.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t3.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t4.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t5.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t6.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t5.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t1.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/hkirat.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}, {
    thumbnail: "/t2.jpg",
    title: "Code a SAAS platform in 6 hours - NextJS, Tailwind, Prisma, Postgres",
    authImg: "/profile2.jpg",
    author: "Harkirat Singh",
    views: "46M views",
    timestamp: "14 hours ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg lg:grid-cols-4 ">
        {VIDEOS.map(video => <div>
            <VideoCard
            thumbnail = {video.thumbnail}
            title = {video.title}
            authImg = {video.authImg} 
            author = {video.author}
            views = {video.views}
            timestamp = {video.timestamp}>
            </VideoCard>
        </div>)}
    </div>
}