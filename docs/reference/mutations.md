---
id: mutations
title: Mutations
slug: mutations
sidebar_position: 2
---

## addAssetLiquidity

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Add asset liquidity

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#addassetliquidityinput"><code>AddAssetLiquidityInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## addPeerLiquidity

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Add peer liquidity

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#addpeerliquidityinput"><code>AddPeerLiquidityInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createAsset

**Type:** [AssetMutationResponse!](/docs/reference/objects#assetmutationresponse)

Create an asset

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createassetinput"><code>CreateAssetInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createAssetLiquidityWithdrawal

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Withdraw asset liquidity

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createassetliquiditywithdrawalinput"><code>CreateAssetLiquidityWithdrawalInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createIncomingPayment

**Type:** [IncomingPaymentResponse!](/docs/reference/objects#incomingpaymentresponse)

Create an internal Open Payments Incoming Payment. The receiver has a payment pointer on this Rafiki instance.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createincomingpaymentinput"><code>CreateIncomingPaymentInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createOutgoingPayment

**Type:** [OutgoingPaymentResponse!](/docs/reference/objects#outgoingpaymentresponse)

Create an Open Payments Outgoing Payment

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createoutgoingpaymentinput"><code>CreateOutgoingPaymentInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createPaymentPointer

**Type:** [CreatePaymentPointerMutationResponse!](/docs/reference/objects#createpaymentpointermutationresponse)

Create a payment pointer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createpaymentpointerinput"><code>CreatePaymentPointerInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createPaymentPointerKey

**Type:** [CreatePaymentPointerKeyMutationResponse](/docs/reference/objects#createpaymentpointerkeymutationresponse)

Add a public key to a payment pointer that is used to verify Open Payments requests.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createpaymentpointerkeyinput"><code>CreatePaymentPointerKeyInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createPaymentPointerWithdrawal

**Type:** [PaymentPointerWithdrawalMutationResponse](/docs/reference/objects#paymentpointerwithdrawalmutationresponse)

Withdraw liquidity from a payment pointer received via Web Monetization.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createpaymentpointerwithdrawalinput"><code>CreatePaymentPointerWithdrawalInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createPeer

**Type:** [CreatePeerMutationResponse!](/docs/reference/objects#createpeermutationresponse)

Create a peer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createpeerinput"><code>CreatePeerInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createPeerLiquidityWithdrawal

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Withdraw peer liquidity

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createpeerliquiditywithdrawalinput"><code>CreatePeerLiquidityWithdrawalInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createQuote

**Type:** [QuoteResponse!](/docs/reference/objects#quoteresponse)

Create an Open Payments Quote

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createquoteinput"><code>CreateQuoteInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## createReceiver

**Type:** [CreateReceiverResponse!](/docs/reference/objects#createreceiverresponse)

Create an internal or external Open Payments Incoming Payment. The receiver has a payment pointer on either this or another Open Payments resource server.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#createreceiverinput"><code>CreateReceiverInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## deletePeer

**Type:** [DeletePeerMutationResponse!](/docs/reference/objects#deletepeermutationresponse)

Delete a peer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#deletepeerinput"><code>DeletePeerInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## depositEventLiquidity

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Deposit webhook event liquidity

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#depositeventliquidityinput"><code>DepositEventLiquidityInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## postLiquidityWithdrawal

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Post liquidity withdrawal. Withdrawals are two-phase commits and are committed via this mutation.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#postliquiditywithdrawalinput"><code>PostLiquidityWithdrawalInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## revokePaymentPointerKey

**Type:** [RevokePaymentPointerKeyMutationResponse](/docs/reference/objects#revokepaymentpointerkeymutationresponse)

Revoke a public key associated with a payment pointer. Open Payment requests using this key for request signatures will be denied going forward.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#revokepaymentpointerkeyinput"><code>RevokePaymentPointerKeyInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## triggerPaymentPointerEvents

**Type:** [TriggerPaymentPointerEventsMutationResponse!](/docs/reference/objects#triggerpaymentpointereventsmutationresponse)

If automatic withdrawal of funds received via Web Monetization by the payment pointer are disabled, this mutation can be used to trigger up to n withdrawal events.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#triggerpaymentpointereventsinput"><code>TriggerPaymentPointerEventsInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## updateAssetWithdrawalThreshold

**Type:** [AssetMutationResponse!](/docs/reference/objects#assetmutationresponse)

Update an asset's withdrawal threshold. The withdrawal threshold indicates the MINIMUM amount that can be withdrawn.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#updateassetinput"><code>UpdateAssetInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## updatePaymentPointer

**Type:** [UpdatePaymentPointerMutationResponse!](/docs/reference/objects#updatepaymentpointermutationresponse)

Update a payment pointer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#updatepaymentpointerinput"><code>UpdatePaymentPointerInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## updatePeer

**Type:** [UpdatePeerMutationResponse!](/docs/reference/objects#updatepeermutationresponse)

Update a peer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#updatepeerinput"><code>UpdatePeerInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## voidLiquidityWithdrawal

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Void liquidity withdrawal. Withdrawals are two-phase commits and are rolled back via this mutation.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#voidliquiditywithdrawalinput"><code>VoidLiquidityWithdrawalInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## withdrawEventLiquidity

**Type:** [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)

Withdraw webhook event liquidity

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
input<br />
<a href="/docs/reference/inputObjects#withdraweventliquidityinput"><code>WithdrawEventLiquidityInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

