import { connect } from 'react-redux';
import ChildProfile from 'src/components/ChildProfile';
import {
  openChangeInfos, changeChildInfos, closeFormAction } from 'src/store/actions';
import { changeTextValue, fetchCommentsByChildId, openModal, postComment, updateComment, openFormDeleteComment, deleteComment } from 'src/store/actions/comment'
import { findComments } from 'src/store/selectors/comment';

import { findUser } from 'src/store/selectors/user';

import { fetchRecapsByChildId } from 'src/store/actions/recap'


const mapStateToProps = (state, ownProps) => ({
  isOpenInfos: state.user.isOpenInfos,
  commentSend: state.comment.commentSend,
  loading: state.comment.loading,
  //comments: findComments(state.comment.list, ownProps.match.params.child_id),
  comments: state.comment.list,
  modalOpen: state.comment.modalOpen,
  commentId: state.comment.commentId,
  formDeleteOpen: state.comment.formDeleteOpen,
  child: findUser(state.children.list, ownProps.match.params.child_id),
  parent: findUser(state.user.list, ownProps.match.params.parent_id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openUserInfos: () => {
    dispatch(openChangeInfos());
  },

  handleChangeInfos: (parentId, childId) => {
    dispatch(changeChildInfos(parentId, childId));
  },

  closeForm: () => {
    dispatch(closeFormAction());
  },

  submitComment: (parentId, childId) => {
    dispatch(postComment(parentId, childId));
  },

  onChangeTextValue: (value) => {
    dispatch(changeTextValue(value));
  },

  loadRecaps: (parentId, childId) => {
    console.log('je fais le loadrecaps')
    dispatch(fetchRecapsByChildId(parentId, childId));
  },

  loadComments: (childId) => {
    dispatch(fetchCommentsByChildId(childId));
  },

/*   loadParents: () => {
    dispatch(fetchUsersParents());
  }, */

 /*  loadChildren: () => {
    dispatch(fetchChildren());
  }, */
  
  onClickOpenModalToFormChangeComment: (commentId) => {
    dispatch(openModal(commentId));
  },

  onClickCancelFormChangeComment: () => {
    dispatch(openModal());
  },

  patchComment: (parentId, childId, commentId) => {
    dispatch(updateComment(parentId, childId, commentId));
  },

  onClickOpenFormDeleteComment: (commentId) => {
    dispatch(openFormDeleteComment(commentId))
  },

  deleteComment: (parentId, childId, commentId) => {
    dispatch(deleteComment(parentId, childId, commentId));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildProfile);
