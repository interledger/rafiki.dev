---
id: interfaces
title: Interfaces
slug: interfaces
sidebar_position: 5
---

## Model



<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [Asset](/docs/reference/objects#asset)
- [Peer](/docs/reference/objects#peer)
- [PaymentPointer](/docs/reference/objects#paymentpointer)
- [IncomingPayment](/docs/reference/objects#incomingpayment)
- [OutgoingPayment](/docs/reference/objects#outgoingpayment)
- [PaymentPointerKey](/docs/reference/objects#paymentpointerkey)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## MutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>

- [CreatePaymentPointerMutationResponse](/docs/reference/objects#createpaymentpointermutationresponse)
- [UpdatePaymentPointerMutationResponse](/docs/reference/objects#updatepaymentpointermutationresponse)
- [TriggerPaymentPointerEventsMutationResponse](/docs/reference/objects#triggerpaymentpointereventsmutationresponse)
- [AssetMutationResponse](/docs/reference/objects#assetmutationresponse)
- [CreatePeerMutationResponse](/docs/reference/objects#createpeermutationresponse)
- [UpdatePeerMutationResponse](/docs/reference/objects#updatepeermutationresponse)
- [DeletePeerMutationResponse](/docs/reference/objects#deletepeermutationresponse)
- [TransferMutationResponse](/docs/reference/objects#transfermutationresponse)
- [LiquidityMutationResponse](/docs/reference/objects#liquiditymutationresponse)
- [PaymentPointerWithdrawalMutationResponse](/docs/reference/objects#paymentpointerwithdrawalmutationresponse)
- [CreatePaymentPointerKeyMutationResponse](/docs/reference/objects#createpaymentpointerkeymutationresponse)
- [RevokePaymentPointerKeyMutationResponse](/docs/reference/objects#revokepaymentpointerkeymutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

