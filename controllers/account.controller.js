import AccountService from "../services/account.service.js";

async function createAccount(req, res, next) {
  try {
    let account = req.body;

    if (!account.name || account.balance == null) {
      throw new Error("Name e Balance são obrigatórios");
    }

    account = await AccountService.createAccount(account);

    res.send(account);
  } catch (err) {
    next(err);
  }
}

async function getAccounts(req, res, next) {
  try {
    res.send(await AccountService.getAccounts());
  } catch (err) {
    next(err);
  }
}

async function getAccount(req, res, next) {
  try {
    res.send(await AccountService.getAccount(req.params.id));
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

async function deleteAccount(req, res, next) {
  try {
    await AccountService.deleteAccount(req.params.id);

    res.end();
  } catch (err) {
    next(err);
  }
}

async function updateAccount(req, res, next) {
  try {
    const account = req.body;

    if (!account.id || !account.name || account.balance == null) {
      throw new Error("ID, Name e Balance são obrigatórios");
    }

    res.send(await AccountService.updateAccount(account));
  } catch (err) {
    next(err);
  }
}

async function updateBalance(req, res, next) {
  try {
    const account = req.body;
    if (!account.id || account.balance == null) {
      throw new Error("ID e Balance são obrigatórios");
    }

    res.send(await AccountService.updateBalance(account));
  } catch (err) {
    next(err);
  }
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
  updateBalance,
};
