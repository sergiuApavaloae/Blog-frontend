export interface Comment{
  name: string,
  email: string,
  message: string,
  id?: number,
  postId:number,
  parentCommentId:number,
  postDate: number
}
