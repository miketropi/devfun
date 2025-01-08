interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Devfun',
    description: `Fanpage Facebook, nơi những kiến thức lập trình web được chia sẻ một cách đơn giản, dễ hiểu nhất! Tại đây, chúng tôi dành trọn tâm huyết để chia sẽ nâng cao kỹ năng, hiểu sâu hơn về lập trình.`,
    imgSrc: '/static/images/devfun-fanpage.jpg',
    href: 'https://www.facebook.com/profile.php?id=100068020483283',
  }
]

export default projectsData
