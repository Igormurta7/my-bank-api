import Account from "../types/Account";
import AccountInput from "../types/AccountInputs";
import AccountService from "../../services/account.service.js";
import { GraphQLBoolean, GraphQLInt } from "graphql";

const accountMutation = {
  createAccount: {
    type: Account,
    args: {
      account: {
        name: "account",
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return AccountService.createAccount(args.account);
    },
  },
  deleteAccount: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: "id",
        type: GraphQLInt,
      },
    },
    resolve(_, args) {
      AccountService.deleteAccount(args.id);
    },
  },
  aupdateAccount: {
    type: Account,
    args: {
      account: {
        name: "account",
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return AccountService.updateAccount(args.account);
    },
  },
};

export default accountMutation;
